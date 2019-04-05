/* netlify-cms 컴포넌트를 복사해서 오버라이딩 */
var mobi_editor = {
  image : {
    label: 'Image',
    id: 'image',
    fromBlock: match =>
      match && {
        image: match[2],
        alt: match[1],
      },
    toBlock: ({ alt, image, title }) =>
      `![${alt || ''}](${image || ''})`,
    toPreview: ({ alt, image }, getAsset) => (
      `<figure><a href=${getAsset(image) || ''} class="mg-link"><img src=${getAsset(image) || ''} ></a><figcaption class="caption">${alt || ''}</figcaption></figure>`
    ),
    pattern: /^!\[(.*)\]\((.*?)(\s"(.*)")?\)$/,
    fields: [
      {
        label: '이미지',
        name: 'image',
        widget: 'image',
        media_library: {
          allow_multiple: false,
        },
      },
      {
        label: '이미지설명(대체텍스트)',
        name: 'alt',
      },
    ],
  },
}
