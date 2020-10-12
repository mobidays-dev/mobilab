# 모비랩 : mobilab
## 1. 요약
- jekyll 을 활용한 모비데이즈 기술 블로그입니다.
-	미디어솔루션(R&D, P&A)와 모비커넥트 운영자들의 기술블로그이다.
-	현재 개발사항은 없으며, 포스트할 때마다 간단한 수정요청사항만 수렴하여 개발 및 서포트한다.
-	이 프로젝트만 유일하게GitHub에서 관리되고 있다.

## 2. 세부업무
| 비고 | 세부 테스크           | 업무 주기 | 내용                         | 개발 리소스 | 운영 리소스 |
| :---| :-------------------- | :------- | :--------------------------- | :--------- | :--------- |
|  1  | 서버 모니터링/관리  | <https://searchadvisor.naver.com>          | 상시 |   X   |   O   |
|  2  | SEO 모니터링/관리<br>(구글서치콘솔,네이버서치어드바이저)| 상시 | 검책창 검색결과 정상확인  |   X   |   O   |
|  3  | 스타일이나 스크립트 작업| 상시 |게시물 텍스트 및 css스타일 수정  |   O   |   X  |

## 3. 개발 가이드
-	URL : https://mobilab.mobidays.com/
-	ADMIN : https://mobilab.mobidays.com/admin/
-	jekyll기반의 정적사이트, ADMIN은 Netlify CMS라이브러리를 기반으로 개발되었음
-	수정요청에 대한 처리 후 master branch에 적용하더라도 Netlify에서 빌드 및 배포하는 시간이 1~2분 걸릴 수 있음
- 게시물 내용 수정 : /_post/ 내 markdown 파일 수정
- 스타일 수정 : /assets/css/screen.css 최상위로 적용되는 css파일로 스타일 수정이 필요하면 이 파일을 수정 및 업데이트하면 된다.

### 3-1. 소스관리
- GitHub : https://github.com/mobidays-dev/mobilab
- GitHub 로그인정보 : ID : mobione@mobidays.com / PW : mobione12345
- Branch 1개 존재 : master(실서버)

### 3.2 배포정보
- 빌드 및 배포 : [Netlify](https://app.netlify.com/sites/mobidays-dev/overview)
- 로그인정보 : ID : mobione@mobidays.com / PW : mobione12345 (GitLab기반)
