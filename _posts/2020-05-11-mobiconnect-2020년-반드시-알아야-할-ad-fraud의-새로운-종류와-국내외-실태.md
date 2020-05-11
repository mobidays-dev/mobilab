---
layout: post
title: "[Mobiconnect] 2020년 반드시 알아야 할 AD Fraud의 새로운 종류와 국내외 실태"
author: 박소담
date: 2020-05-11 07:01
image: ""
tags:
  - ad-fraud
  - ad-tech
  - marketing
  - mobile
  - programmatic
published: true
---
<!--StartFragment-->

# **Ad fraud에 관하여**

웹 그리고 모바일 광고시장이 비교적 성숙하고 안정된 상태로 접어들었지만 광고 생태계, 특히 모바일 분야는 여전히 미지의 수준인 부분이 많습니다. 겉으로 보기에는 산업 자체는 꽤 건강해 보이는 상황이지만, 여전히 잦은 M&A활동과 해당 산업 종사자들이 건너야할 과제들이 많은 것 또한 사실이죠.

> 이러한 과제들 중에서 큰 이슈중 하나는 Ad fraud입니다. 

모바일 광고 캠페인이 유저들에게 도달하기 까지의 모든 트래픽 과정마다 Fraudsters에게 노출되어 있는 만큼 이 산업에서의 큰 성공요인은 Fraudulent behavior을 어떻게 판별하는 데에 있다고도 할 정도입니다.

또한 네트워크가 이에 대한 새로운 해결방안을 제시할 때 마다 Fraudsters의 새로운 공격 방안 또한 진화하고 있는 상황인 만큼 그 종류 또한 다양해지고 있죠. 따라서 이에 대한 간략한 정의와 Ad Network사들의 분류법에 대해서 안내드리겠습니다.

# **Ad fraud의 정의**

Mobile Ad Fraud는 Mobile 광고 프로세스에서 부정한 방식으로 Traffic을 발생 시켜 수익을 챙기는 행위입니다. 정상적인 Audience 유입으로 인한 광고 요청이 아닌, 컴퓨터 또는 인위적 행위를 통해 광고요청을 발생시켜 부정 수익을 창출 하는 광고 사기 수법이죠.

만들어내는 허수의 종류에 따라 Impression Fraud, Click Fraud, Install Fraud, Post-Install Fraud 등으로 나뉘고, Fraud를 만들어내는 방식에 따라 Technical Fraud, Compliance Fraud로 분류됩니다.

Fraud Traffic이 발생할 수 있는 근본적인 원인은 App 혹은 Web의 이름을 모르는 채 인벤토리를 판매,구매 하는 프로그래머틱 광고 네트워크의 구조에 있습니다. 이러한 Fraud Traffic을 통해 수익을 얻는 주체는 매체사(Publisher) 혹은 그들을 이용하여 수익을 얻을 수 있습니다.

![*(이미지출처: https://en.wikipedia.org/wiki/File:Fraud.jpg)*](https://lh6.googleusercontent.com/xr_6bxkQyVk6TlNyRelZQo25XbdJcTWY_OBtz6115NZNRDqaHuqGa0ZS-Y0uQV30A0JaZpQD0nk_kGoWzzFhPKug2Lin2fXLiNbJKO9wgzo2It5WCn_J5rsRHVUTew)

# Ad fraud의 분류

앞서 언급한 바와 같이, Ad fraud는 광고 캠페인이 유저들에게 도달하기 까지의 모든 트래픽 과정마다 발생할 수 있습니다. 국내 Ad network인 모비커넥트에서 더 자세하게 Traffic의 각 Touch point와 전환에 따라 Impression fraud, Click fraud, Install fraud 로 분류하여 안내드립니다.

더 나아가 Fraud가 실행되는 방식에 따라 기술을 이용하여 과금 이벤트를 인위적으로 생성하는 Technical Fraud와 기존 플랫폼의 규율을 위반하는 방식인 Compliance Fraud로 나눌 수 있습니다.

![](/static/images/pasted-image-0.jpg)

위의 표는 Mobidays에서 Ad Fraud를 분류한 기준표로서 각 Touch point(Impression, Click, Install)의 Technical fraud와 Compliance Fraud를 보여줍니다.

먼저, Impression Fraud의 Technical Fraud에는 Ad Stacking, Pixel Serving, Background Ad Serving 그리고 Hijacking이 있으며, Compliance Fraud에는 VIew Viewability가 있습니다.

* Ad Stacking

여러 개의 배너를 겹쳐서 노출

* Pixel Serving

보이지 않는 픽셀에 광고를 송출하여 유저에게는 보이지 않음

* Background Ad Serving

앱이 백그라운드에서 돌고 있는 동안에도 광고 송출

* Hijacking

멀웨어가 포함된 앱을 다운받았을 때 유저의 디바이스에 침투하여 유저에게 보이지 않는 광고를 송출

* View Viewability

유저가 거의 보지 않는 곳에(ex 페이지 하단) 광고 배치

Impression 다음 단계인 Click에서도 Fraud가 발생합니다. Click Fraud의 Technical Fraud에는 Attribution Fraud, Click Stuffing, Hijacking이 있고, Compliance Fraud에는 Click Misusage가 있습니다.

* Attribution Fraud

웹에서 주로 쓰는 Cookie Stuffing을 계승한 것으로, 모바일에서는 페이지 방문시 특정 앱 Transaction id가 자동으로 생성되고 후에 유저가 앱스토어에서 오가닉으로 다운받으면그 웹사이트가 기여를 한 것으로 됨

* Click Stuffing

비보상형 캠페인에 보상형 트래픽 쓰면서 CTR을 낮추기 위해 인위적으로 클릭을 생산하고 투입하는 것

* Hijacking

멀웨어가 포함된 앱을 다운받았을 때 유저의 디바이스에 침투하여 페이지를 오픈하고 클릭을 생성함 (멀웨어 쥬디)

* Click Misusage

클릭을 유도하기 위해 크리에이티브를 변형해서 노출하는 것으로, 과장을 하거나 잘못된 내용을 넣거나 실제 링크가 랜딩되는 앱과 다른 앱의 소재를 쓰는 등의 방식

마지막으로 Install과 Post-install 단계에서의 Technical Fraud와 Compliance Fraud에는 각각 Faked Postback, Device Emulation, Unauthorized versions of Apps과 Undisclosed Rebrokering이 있습니다.

* Faked Postback

트래킹솔루션에서 Postback이 송출되는 것이 아니라 써드파티가 브라우저나 API콜 등을 통해서 Install, Post install postback을 흉내내는 것 (IAP 포함)

* Device Emulation

실제 디바이스가 아닌 컴퓨터에서 에뮬레이션을 돌려서 이벤트 발생

* Unauthorized versions of Apps

앱을 복제하여 유저가 설치하게 한 후 설치한 유저의 정보를 복사하여 다른 Install 발생시 사용

* Undisclosed Rebrokering

오퍼를 다른 퍼블리셔에게 제공함

> ### 더욱 상세한 Fraud와 국내외 실태가 궁금하셨다면 아래 리포트를 다운받아보세요.
>
> ![](/static/images/배너1.png)

<!--EndFragment-->

<!--EndFragment-->