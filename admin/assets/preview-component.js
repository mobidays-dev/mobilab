/* react module이 필요하기 때문에 nerlify-cms 다음 순서로 임포트 */

var mobi_preview = {
  post : createClass({
    render: function() {
      var entry = this.props.entry;
      // var coverImagePath = this.props.getAsset(entry.getIn([ 'data', 'image' ])) || '/assets/images/default_blog_cover.jpg';
      var coverImagePath = this.props.getAsset(entry.getIn([ 'data', 'image' ])) || '';
      var coverLink = this.props.widgetsFor('cover').getIn(['data', 'link']) || '';
      var coverTitle = this.props.widgetsFor('cover').getIn(['data', 'title']) || '';

      var author = entry.getIn([ 'data', 'author' ]) || 'dev';
      var date = entry.getIn([ 'data', 'date' ]) || '';

      return h('div', { id: 'wrapper' },
          h('div', { id: 'cover', 'className': 'container', style: { 'background-image': 'url('+ coverImagePath.toString() +')' } },
              h('div', {},
                  h('h1', {}, entry.getIn([ 'data', 'title' ]) ),
                  h('p', { style:{ 'color': 'white !important' } },  date.split(' ')[0].replace(/-/gi,'/'), ' by ',
                      h('b', { style: { 'font-size': '11px' } },
                          h('a', { href: '/authors/' + author }, author )
                      )
                  ),

                  h('cite', {},(coverTitle || coverLink) ? '커버 이미지 출처: ' : '',
                      h('a', { href: coverLink, target: '_blank'}, coverTitle || coverLink )
                  )

              )
          ),
          h('div', { id: 'navbar', 'className': 'container' } ),
          h('div', { id: 'content', 'className': 'container post', role: 'main' },
              h('div', { id: 'post-content' },
                  h('p', {},
                      (this.props.widgetsFor('tags').hasOwnProperty('_origin'))?
                      this.props.widgetsFor('tags').map(function(tag, index) {
                          return h('a', { 'className': 'tag', href: '/tags/'+tag.getIn([ 'data' ]) },
                            '#', tag.getIn([ 'data' ])
                          );
                      }) : ''
                  ),
                  this.props.widgetFor('body')
              )
          ),
       );
    }
  }),

  author : createClass({
    render: function() {
      var entry = this.props.entry;

      var thumbnailPath = this.props.getAsset(entry.getIn([ 'data', 'image' ])) || '/static/authors/default.png';
      // var coverImagePath = '/assets/images/default_blog_cover.jpg';
      var coverImagePath = '';

      var authorName = entry.getIn([ 'data', 'name' ]);
      var authorTitle = entry.getIn([ 'data', 'title' ]);
      var authorSubName = (authorName != authorTitle) ? '(' + authorTitle + ')' : '';
      var authorDesc = entry.getIn([ 'data', 'desc' ]);
      var authorEmail = (entry.getIn([ 'data', 'email' ])) ? '<' + entry.getIn([ 'data', 'email' ]) + '>' : '';

      return h('div', { id: 'wrapper' },
          h('div', { id: 'cover', 'className': 'container', style: { 'background-image': 'url('+ coverImagePath.toString() +')' } },
              h('div', {},
                  h('div', { id: 'cover-author-image', style: { 'background-image': 'url('+ thumbnailPath.toString() +')' } },
                      h('span', { 'className': 'sr-only' }, authorTitle )
                  ),
                  h('div', {},
                      h('h1', {}, authorName || authorTitle,
                          h('b', { style: { 'font-size': '11px' } }, authorSubName )
                      )
                  ),
                  h('p', { style: { 'padding-top': '1px' } }, authorDesc )
              )
          ),
          h('br', {} ),
          h('hr', {} ),
          h('div', { id: 'content', 'className': 'container post', role: 'main' },
              h('div', { id: 'post-footer' },
                  h('a', { id: 'post-author' },
                      h('div', { id: 'author-image', style: { 'background-image': 'url('+ thumbnailPath.toString() +')' } },
                          h('span', { 'className': 'sr-only' }, authorTitle )
                      ),
                      h('p', { id: 'author-name', style: { 'font-weight': 'bold' } }, authorTitle,
                          h('b', { style: { 'font-size': '11px' } }, authorEmail )
                      )

                  ),
                  h('p', { id: 'post-date' }, authorDesc )
              )
          ),
          h('hr', {} )
       );
    }
  }),
}
