---
layout: post
title: Apple iOS 14 업데이트가 Ad Tech 업계에 미칠 영향 - 1편
author: 이사라
date: 2020-08-27 01:46
image: /static/images/preview.png
cover:
  link: https://www.apple.com/kr/ios/ios-14-preview/?&cid=wwa-kr-kwgo-features--slid----iPhone-&mtid=20925e2040382&aosid=p238&mnid=snaTnmPqx-dc_mtid_20925e2040382_pcrid_447580355696_pgrid_109347811852_&anonymizeip=set
tags:
  - ad-tech
  - mobile
  - trend
  - ios
published: true
---
<!--StartFragment-->

> ## **들어가며**

 이 글은 Ad Tech(이하 애드테크) 업계 플레이어로 대두되는 Tracking Tool(이하 트래킹툴), Ad Network(이하 애드네트워크), Ad Exchange(이하 애드익스체인지), Attribution(이하 어트리뷰션), DSP, DMP, SSP 플랫폼 사용자에게 인사이트를 제공합니다. 특히 이 글을 읽고 있는 주체가 광고주, Publisher(이하 퍼블리셔), 광고 운영자 또는 광고 플랫폼 기획자라면 iOS 14 업데이트 이후 BM을 재설계해야 할 가능성이 높습니다. 연관 문서까지 참고하여 주시기 바랍니다.

> ## **iOS 14 업데이**

 [iOS 14](https://www.apple.com/kr/ios/ios-14-preview/?&cid=wwa-kr-kwgo-features--slid----iPhone-&mtid=20925e2040382&aosid=p238&mnid=snaTnmPqx-dc_mtid_20925e2040382_pcrid_447580355696_pgrid_109347811852_&anonymizeip=set)는 현재까지 나온 iOS 업데이트 중에 가장 큰 업데이트입니다. 애드테크 종사자가 가장 눈여겨봐야 할 업데이트 아젠다는 ‘개인 정보 보호 향상’ 입니다. Apple은 [WWDC 2020](https://developer.apple.com/wwdc20/)에서 iOS 사용자 개인정보 보호 정책을 강화하겠다고 발표했습니다. 이 정책으로 인한 변화는 일반 사용자가 정식버전으로 업데이트하게 되는 2020년 10월부터 본격화 될 것으로 보입니다.

 업데이트 이전, 앱 개발자들과 3rd Party Tracker, 광고주들은 LAT(Limited Ad Tracking)를 활성화한 유저가 아니라면 별도의 동의 절차 없이도 간편하게 IDFA 값을 취득할 수 있었습니다. 하지만 업데이트 이후, 애플이 개인정보 보호 정책을 강화하면서 앞으로 IDFA 값을 사용하기 위해서는 앱 사용자의 동의를 얻어야만 하게 되었습니다. 따라서 사용자의 동의를 얻지 않으면 IDFA를 제공받을 수 없고 따라서 타겟팅 광고 또는 광고 트래킹을 위한 사용자 식별에 많은 제한이 생기게 됩니다.

> ## **광고 추적 제한**

업데이트 이전에도 iOS 사용자는 광고 추적(이하 트래킹) 제한 기능을 직접 활성화하거나 IDFA 값을 초기화함으로써 타겟팅 광고를 거부할 수 있었습니다. 그러나 해당 기능을 활성화 하기에는 메뉴 접근성이 낮아, 기능을 활용하는 iOS 사용자는 약 30%에 불과했습니다(미국 기준, [출처](https://www.singular.net/blog/limit-ad-tracking-privacy-checkup-in-2020/)). 한 설문 조사에 따르면 그림1의 시스템 권한 알림 요청에서 사용자가 “Ask App Not to Track (앱 트래킹 비허용)” 버튼을 확실히 누를 가능성은 약 51%로 전망됩니다([출처](https://blog.tapresearch.com/2020/06/30/new-poll-suggests-ios-users-unlikely-to-share-idfa-with-publishers/)). 설문 참여자의 21%가 중립을 선택한 것을 고려하면, 업데이트 이후 광고주들은 상당수의 iOS 사용자들을 트래킹하기 어려워지게 됩니다.

![<그림 2. 사용자 동의 없이 IDFA를 취득할 수 있는 예외 조항 (출처:developer.apple)>](/static/images/idfa_guidelines.png)

 앱 개발자가 사용자의 동의 없이도 IDFA 값을 취득할 수 있는 예외 사항도 있습니다(그림 2). 1)앱이 3rd Party Data 취급 플랫폼(애드네트워크, DMP 등)으로 사용자 식별값을 전송하지 못하는 경우, 2) 앱 내 데이터를 공유하는 플랫폼에서 [Ad Fraud](https://www.mobiinside.co.kr/2020/05/12/mobi-connect-ad-fraud/) 식별과 방지를 목적으로 앱 데이터를 이용하는 경우입니다. 예를 들면, 신용카드사의 경우에는 결제 모듈 내 Fraud 방지나 보안을 위한 목적에 한하여 IDFA를 동의없이 수집이 가능할지도 모릅니다. 이는 극히 제한적인 사례이므로, 대다수의 광고주들은 트래킹 프로세스에서 IDFA를 대체할 방법을 찾아야 합니다.

> ## **트래킹 툴의 대응 현**

iOS 정책 변화로 가장 발빠르게 준비하고 있는 플레이어는 트래킹툴입니다. 트래킹툴에서는 iOS 14와 함께 업데이트되는 SKAdNetwork 버전2에 대한 솔루션 가이드 문서를 앞다투어 발표하고 있습니다.

SKAdNetwork는 Apple에서 2018년 상반기에 발표한 어트리뷰션 모델이며, 애드네트워크는 다이렉트 연동을 통해 3rd Party 트래킹툴을 거치지 않더라도 Install을 어트리뷰션할 수 있게 됩니다. 이 모델은 이전과는 달리 애드네트워크에 IDFA를 포함한 개인 정보나 개인을 식별할 수 있는 정보를 전송하지 않습니다. Install 포스트백은 Install 을 발생시킨 앱이 아닌 iOS 시스템에서 자체적으로 발송하게 뫼므로, 광고주들은 앱이 설치되었는지의 여부는 알 수 있으나 앱이 설치된 디바이스와 관련된 정보는 알 수 없습니다. 따라서 앱 설치 이후의 액션에 대한 유저 단위의 트래킹이 어려워지게 됩니다. 버전2 이후에는 어떤 퍼블리셔에서 Install이 발생했는지까지 확인이 가능해지므로, 이에 따른 메이저 트래킹툴들의 시나리오를 간략히 소개합니다.

![<그림3. SKAdNetwork 워크플로우 (출처:developers.apple)>](/static/images/skadnetwork-flow.png)

<!--StartFragment-->

SKAdnetwork를 토대로 광고를 진행해야 하는 상황이 오자, 트래킹툴 들은 SkAdnetwork로 부터 받는 데이터들의 활용을 극대화하기 위해 노력중입니다. Adjust(애드저스트)에서는 새로운 버전의 SDK 업데이트를 발표했습니다([원문](https://www.adjust.com/blog/getting-ready-for-ios-14-with-adjust-newest-sdk/)). 또한 [iOS 14의 모바일 앱 수익화 대한 가이드](https://www.adjust.com/resources/ebooks/ios-14-guide/)를 공개하며 광고 운영자에게 인사이트를 제공하고 있습니다. Appsflyer(앱스플라이어)에서는 차분 집약형 어트리뷰션 방식을 발표했습니다([원문](https://www.appsflyer.com/blog/aggregated-attribution-solution-ios14/)). 이에 따라 파트너사에 새로운 클릭 어트리뷰션 링크와 포스트백 구조를 별도 안내하고 있습니다. Singular(싱귤러)에서는 SKAdNetwork 적용에 대한 레퍼런스 케이스를 발표했습니다([원문](https://www.singular.net/blog/skan-skadnetwork-implementation/)). 또한 [MAP(Mobile Attribution Privacy) 슬랙 그룹](https://join.slack.com/t/mapworkinggroup/shared_invite/zt-9vlvhtzn-bqUVQ1zn3o1UorDNIodvZg)을 운영하며 SKAdnetwork에 대한 질문과 아이디어를 자유롭게 교환하고 있습니다. ([참고](https://singularkorea.github.io/2020-06-28/skadnetwork-support))

> ## **향후 전망**

모바일 애드테크 생태계에서 ios사용자에 대한 트래킹은 이전과 완전히 달라질 것입니다. 특히, 3rd Party 트래킹툴과 DSP, Ad-network, DMP들은 유저 단위의 트래킹에 많은 제약을 받음에 따라 새로운 트래킹 방법에 대해서 고민해야 할 것입니다.

광고주들은 이전보다 사용자에게 개인정보 사용 동의를 얻어낼 새로운 전략을 모색하는 데에 많은 리소스를 투여해야 할 것입니다. 광고 추적을 허용할 만큼 충분한 베네핏을 제공해서 유저 데이터를 얼마나 쌓느냐가 곧 이후의 광고 성과와 서비스 고도화를 이루기 위한 시작점이 될 것으로 생각됩니다. 퍼블리셔에게는 클릭 어트리뷰션을 전달하는 방식에 많은 변화가 있을 예정입니다.

다음 포스트에서는 iOS14 업데이트로 인해 광고주, 광고 운영자, 광고 플랫폼 기획자 등 애드테크 산업에 종사하는 직군별 확인해야 할 요소들과 그에 따른 권장 액션 리스트를 소개해 드립니다.

<!--EndFragment-->