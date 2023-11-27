---
title: 프론트엔드 레이어는 어떻게 나눌 수 있을까?
slug: front_layer
author: 허덕형
topics: [Frontend, Dev]
keywords: [FrontEnd, Layer]
description: 소프트웨어의 설계에서 계층 분리는 정말 중요한 문제이다. 프론트엔드 개발에서 어떤 식으로 계층을 분리해 볼 수 있을까 고민해보자.
createdAt: 2023년 11월 26일 11:20
thumnail: "/images/posts/front_layer/front_layer.png"
---

> ❗️ 과거에 개인 노션 블로그에 기록해 두었던 내용입니다. 기술적인 부분은 아니지만 이런 고민을 해본적이 있었다는 것을 공유하고 싶어서 올려봅니다.
> 모든 글을 옮길 생각은 없어서 과거글이 궁금하신 분은 [과거 블로그](https://www.notion.so/ea39053093ab4974abc2cbc03a89004c?p=fbb0ce90a5be42c5b6543ded0e92ca17&pm=s)를 방문해주세요.

> 해당 글은 사진을 보면서 이해해야하는 정보가 많은데 사진을 다 옮기지 못했어요 😅  
> 혹시 글이 마음에 들어 사진 자료와 함께 보고싶으신 분은 다음 [원본 링크](https://www.notion.so/fbb0ce90a5be42c5b6543ded0e92ca17)를 눌러주세요.

# 개요

소프트웨어의 설계에서 계층의 분리는 정말 중요한 문제입니다. 흔히 말하는 관심사를 분리하는 과정이라고도 말할 수 있을 것 같은데, 그렇다면 이 분리가 왜 중요할까요? 이 분리는 과연 우리에게 어떤 이점을 가져다줄까요? 프로젝트를 진행하면서 직접 고민해보고 느껴본 바를 적어보면서 레이어를 분리하는 제 기준에 대해서 공유해보고자 합니다.

# 가로와 세로로 나눠보는 레이어

일단 가로와 세로 이전에 레이어에도 `레벨` 이라는 것이 존재합니다. 저는 `코드 레벨이라는 아주 미시적인 관점의 레이어`부터 `거시적으로 인프라 레벨에서 볼 수 있는 레이어` 로 확장을 해 나갈 수 있는데요, 이 `레벨` 이라는 것의 기준을 세워두지 않으면 헷갈릴 수 있기 때문에, 가로 세로를 나누기에 앞서 각 `레벨` 별로 분리를 하고 그 안에서 가로 세로를 나누어보겠습니다.

먼저 큰 부분을 분리하고 세부적으로 들어가는게 쉽기 때문에

**어플리케이션 수준 ⇒ 프론트엔드 프로젝트 수준 ⇒ 내부 코드의 수준** 으로 분리해보겠습니다.

그리고 이 수준안에서 가로 세로 레이어를 나누어볼 수 있는데

- 세로 (수직) 레이어 : 가변 난이도와 역할에 따라 `관심사를 따라 분리` 할 수 있다.

- 가로 (수평) 레이어 : 같은 수준의 레이어 안에서 `관심사에 따라 분리` 할 수 있는 레이어입니다.

구체적인 것은 각 준에서의 분리를 보면서 파악해보도록 하겠습니다.

## 어플리케이션 수준에서의 레이어 분리

![스크린샷 2022-06-19 오전 12.24.48.png](/images/posts/front_layer/front_layer.png)

해당 수준에서 수직으로 레이어를 분리하면 위 그림처럼 나눌 수 있을 것 같은데요,

### DB 레이어 (Store Layer)

DB레이어는 우리의 서비스를 운영하는 동안 쌓을 데이터를 축적하는 곳 입니다. 사실상 초기에 큰 설계를 마치고 나면 그 설계 자체가 거의 변경되지도 않고, 그 안에 쌓은 데이터 역시 임의로 조작할 일이 거의 없습니다.

수평 레이어 : Auth DB, Event DB 같이 데이터 저장 성격에 따라서 분리해볼 수 있습니다.

### BackEnd 레이어 (Service Layer)

사실 백엔드 안에서 나누어지는 코드 수준의 레이어도 중요하긴 하지만, 일단 프론트 입장에서의 분석을 할 것이라 그건 생략하고 큰 개념에서 설명해보겠습니다.

백엔드는 `운영 정책에 따라` 프론트로부터 받은 정보를 잘 가공하여 DB에 저장하는 역할을 하고, DB로 부터 받아온 데이터를 프론트에게 전달하는 역할을 한다.

수평 레이어 : 주문 서비스, 할인 서비스같이 제공하는 서비스와 관련된 묶음으로 나누어 볼 수 있을 것 같습니다.

### FrontEnd 레이어 (View Layer)

프론트엔드 레이어의 역할은 사용자에게 UI/UX를 제공하는 일을 합니다. 사실상 상대적으로 가장 쉽게 운영 환경을 변경할 수 있어 가장 위쪽에 위치한 Layer입니다. OTT서비스를 예로 들면 이해하기가 쉬운데, Netflix를 생각해볼까요? Netflix는 운영 환경에 따라 Web, Mobile, Tv등 다양한 환경에서 볼 수 있습니다. 각 기기에 맞춰 프로젝트를 쉽게 만들고 바꿀 수 있기 때문에 상대적으로 가변성이 가장 큰 층입니다.

수평 레이어 : Web, Mobile, Tv가 여기서 수평 레이어라고 할 수 있겠네요😃

## 프론트엔드 프로젝트 수준에서의 레이어 분리

![레이어 그림 링크](/images/posts/front_layer/front_layer_2.png)

계속해서 가변 가능성을 기준으로 수직 분리를 해볼 수 있다. 우선 계속 큰 층부터 조금씩 설명하자면 UI/UX와 관련한 프레임워크 환경으로 구성된 층은 Application Layer로 구성하였다. NonApplication Layer는 순수 JS로 구성된 코드들로 화면단만 준비되어 있다면, 해당 층을 다양한 성격의 Applicaition Layer(RN, React, Vue, Angular, …)와 조립하여 다양한 환경의 어플리케이션을 조작하는 것이 가능하다.

### NonApplicationLayer

순수 바닐라 JS로 구성할 수 있는 코드들이 모인 층이다

- Library Layer : Axios, Lodash, Dayjs 등 프로젝트를 만들기 위해 필요한 바닐라 JS로만 만들 수 있는 유틸리티 라이브러리 코드 층이다.

아래 코드는 naverHttp 코드로 axios를 이용하여 naver와 통신할 수 있는 기본 세팅을 맞춘 코드다.

```jsx
const CLIENT_ID = process.env.VUE_APP_NAVER_CLIENT_ID
const CLIENT_SECRET = process.env.VUE_APP_NAVER_CLIENT_SECRET

const naverHttp = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://localhost:8089"
      : "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "X-NCP-APIGW-API-KEY-ID": CLIENT_ID,
    "X-NCP-APIGW-API-KEY": CLIENT_SECRET,
  },
})

naverHttp.interceptors.request.use(
  requestInterceptors.success,
  requestInterceptors.fail
)
naverHttp.interceptors.response.use(
  responseInterceptors.success,
  responseInterceptors.fail
)

export default naverHttp
```

이처럼 라이브러리를 이용하여 [Service Layer](https://www.notion.so/10463c3622414edaa138e4c6fb7c6316?pvs=21)에서 사용할 수 있도록 기본 세팅을 맞추어 놓는 층이라고 할 수 있다. 경우에 따라서는 [Adaptor pattern](https://ko.wikipedia.org/wiki/%EC%96%B4%EB%8C%91%ED%84%B0_%ED%8C%A8%ED%84%B4)이라는 것을 사용해서 library끼리 교체하기 쉬운 상태로 관리할 수도 있다.

- Service Layer : 본격적으로 Application Layer에서 직접적으로 의존하게 되는 층이다. 해당 서비스 레이어는 Domain과 ServerHttpApis로 구성이 되며 각각은
  - Domain : Auth, Error 해당 도메인과 관련하여 다루는 코드들로 이루어진 곳이다.
    - 가령 예를 들면 이런 코드이다. 서버로부터 받아오는 공기의 퀄리티와 관련한 정보가 1,2,3,4,5같은 식인데 기획의 요구사항에따라 유저가 볼 수 있는 상태가 바뀌게 된다.
      ![스크린샷 2022-06-18 오후 10.10.30.png](/images/posts/front_layer/service_layer_domain.png)
  - ServerHttpApis : Api 통신을 통신하는 코드를 모아놓은 곳
    - library Layer에 의존하여 코드가 작성된 것을 확인할 수 있다.
      ![스크린샷 2022-06-18 오후 10.14.14.png](/images/posts/front_layer/service_layer_lib.png)
  - Mapping : 서버로부터 받아온 코드를 FE측에서 사용하기 쉬운 키값으로 변경해준다.
    - 만일 공기 오염질 API의 키가 변경되었다면, 다른 곳의 수정은 필요없고 이곳의 키값만 바꿔주면 된다. 여기서 mapTarget은 서버로 부터 받아온 response를 의미합니다.
      ![스크린샷 2022-06-18 오후 10.15.15.png](/images/posts/front_layer/service_layer_map.png)

### Application Layer

해당 Layer는 내가 선택한 UI 프레임워크 환경에 큰 영향을 받습니다.

- Vue를 택할 경우
  - Store Layer : Vuex 혹은 Pinia
  - Router Layer : Vue-router 혹은 Nuxt.js
- React 혹은 React Native를 택할 경우
  - Store Layer : Rocoil 혹은 Redux
  - Router Layer : React-router 혹은Next.js

거의 이런 식이기 때문에 Vue, React같은 경우는 거의 변경하는 일이 없다고 봐도 무방합니다. 일단 가장 크게 통째로 보면 이런 레이어이고 좀 더 세부적으로 봐보겠습니다.

- Store Layer 해당 부분은 Redux, Vuex등 Store프레임워크의 컨셉에 따라 이 안에서도 Layer를 나누어 볼 수 있습니다. 그 예시로 Vuex를 보여드리겠습니다.

**Store Layer**

![스크린샷 2022-06-18 오후 11.07.31.png](/images/posts/front_layer/vuex.png)

- State와 Mutation (DB, Repository Layer)

  - State는 상태를 관리하고 싶은 데이터들
  - Mutation은 State를 단순 갱신하는 코드

- Action (Service,Controller Layer)
  - state에 업데이트 하기전에 데이터를 처리하는 코드
  - 간단하게 설명하면, 서버랑 통신해서 클라이언트에서 다룰 데이터를 받아와서, 클라이언트에서 사용하기 좋게 데이터를 Mapping해서 state에 갱신하는 흐름을 만들고 있다.
- Getter (View, Presentation Layer)
  - 저장된 state를 component에서 쓸 수 있게 제공하는 역할을 한다.
  - 이곳에서 데이터를 Component에 단순 제공하는 역할을 한다.

**Router Layer**

각 페이지 Routing과 관련된 코드를 관리하는 Layer이다. 페이지의 접근 권한, 구조 같은 것을 설정할 것을 목적으로 두고있다.

**View Layer**

UI와 관련된 코드를 관리하는 레이어(Pages, Component)

# 마치며

저번에 도커를 공부하면서 레이어라는 개념이 등장했습니다. 프로그래밍 용어가 정말 여기저기서 겹치면서 사용되는데, 그 의미는 사실상 거의 비슷해 보이는데요. 스스로 고민해보는 과정, 또 다른 공부를 하면서 습득하는 지식들이 조금씩 쌓여가면서 소프트웨어 용어에 대한 개념이 조금씩 단단해지고 있다는 생각이 듭니다. 이런 고민들이 모여서 점점 더 개선된 모습을 보일 수 있기를 바라며 이번 글은 여기서 마치겠습니다.
