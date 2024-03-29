import { Experiences, ICareerItem } from '../../../interfaces/careerItem';

export const careerList: ICareerItem[] = [
  {
    companyName: '레몬베이스',
    companySlug: 'lemonbase',
    companyDescription:
      "레몬베이스는 회사에서의 삶(Worklife)이 '돈을 벌기 위해 수동적으로 보내는 시간'이 아닌 '나와 조직의 성장과 성공을 위해 주도적으로 활용하는 시간'이 될 수 있도록 일 하는 방식을 혁신하는 팀입니다.",
    position: '프론트엔드 엔지니어',
    period: '2021.11 ~ 현재',
    projects: [
      {
        name: '레몬베이스 1:1 미팅, 목표 제품 개발(OneGoal Squad)',
        period: '2022.06 ~',
        description:
          '레몬베이스의 1:1 미팅 기능과 목표 제품을 개발하고 있습니다.',
        details: ['알림 설정 등의 신규 기능 개발', 'UI/UX 개선 등 제품 고도화'],
        skills: 'React, TypeScript, Emotion',
      },
      {
        name: '레몬베이스 디자인 시스템(LDS) 개발(LDS Guild)',
        period: '2022.02 ~',
        description:
          '엔지니어와 디자이너간의 UI/UX적인 커뮤니케이션 미스를 줄이고, 고객에게 일관된 UI/UX 경험을 전달하고자 디자인 시스템을 개발하고 있습니다.',
        details: [
          'Ant Design의 Modal 컴포넌트를 기반으로 Confirm Modal 작업을 진행했습니다.',
          '기존에 사용하고 있던 Ant Design Confrim Modal의 90% 이상을 디자인 시스템 Confirm Modal로 대체했습니다.',
        ],
        skills: 'React, TypeScript, Emotion',
      },
      {
        name: '레몬베이스 모바일 개발(Growth Squad)',
        period: '2022.02 ~ 2022.05',
        description: '레몬베이스 1:1 기능의 모바일 버전을 출시했습니다.',
        details: [
          'Expo(React Native)를 사용해 개발했습니다.',
          '개발 당시, 빠르게 실행하고 관리가 용이한 React Native Webview를 활용해 모바일 앱을 개발했습니다.',
          '특정 기능 단위로 끊어, 순차적 배포를 진행했습니다.',
          'Expo에서 제공하는 OTA 기능의 존재를 인지하지 못해, develop환경의 코드가 production에 배포되는 문제가 생겨 Release Channel을 사용할 수 있는 환경을 구성했습니다.',
        ],
        skills: 'React Native WebView, React, TypeScript, Emotion',
      },
      {
        name: '레몬베이스 인트로 사이트 리뉴얼',
        period: '2021.12 ~ 2021.12',
        description: '레몬베이스의 인트로 사이트를 리뉴얼 하였습니다.',
        details: [
          '자주, 혹은 공통적으로 사용되는 컴포넌트들을 분리하는 것에 집중하여 개발했습니다.',
          'Context API를 사용해 도메인 내에서 글로벌하게 사용될 상태를 관리했습니다.',
          'Safari 브라우저를 대응해, flex-box layout이 의도대로 동작할 수 있게 처리했습니다.',
        ],
        skills: 'React, Typescript, Emotion',
      },
    ],
  },
  {
    companyName: '지엔터프라이즈(구 에멘탈)',
    companySlug: 'zent',
    companyDescription:
      '지엔터프라이즈의 비즈넵 서비스는 소상공인을 클라이언트로 하여 자본 흐름 파악과 세금 관련 사고를 미리 방지할 수 있는 솔루션입니다.',
    position: '프론트엔드 엔지니어',
    period: '2019.11 ~ 2021.11',
    projects: [
      {
        name: '간편장부 초기 기능 개발',
        period: '2021.07 ~ 2021.10',
        description:
          '비즈넵 서비스에서 장부 서비스를 제공하기 위한 사전 작업을 진행했습니다.',
        details: [
          'moment.js 라이브러리를 date-fns 라이브러리로 마이그레이션하는 작업을 진행했습니다.',
          '증빙 자료에 계정과목을 반영/변경할 수 있는 플로우를 개발했습니다.',
          '비즈넵 서비스에서 사용할 계정과목 목록을 관리할 수 있는 admin 서비스를 개발했습니다.',
        ],
        skills: 'Angular, Ionic, Apollo Client, TypeScript, SCSS',
      },
      {
        name: '비즈넵 웹, 앱 공지사항 플로우 개발',
        period: '2021.06 ~ 2021.06',
        description:
          '비즈넵 웹엡 서비스와 모바일 서비스에 DatoCMS를 연동하여 CMS 툴에서 작성한 공지사항 내용을 서비스 내에 띄워 보다 나은 사용자 경험을 위한 플로우를 개발했습니다.',
        details: [
          'DatoCMS에서 제공하는 GraphQL API와 연동해 발행한 글을 서비스에서 받아올 수 있게 Apollo Client를 개발했습니다.',
          'Develop 환경에서 작성한 공지사항을 테스트하기 위해 draft 상태의 글을 받아오는 플로우를 개발했습니다.',
          '공지사항 글만 작성하게 되면 서비스에서 바로 볼 수 있는 플로우로 사용자 경험을 개선했습니다.',
        ],
        skills: 'Angular, Apollo Client, TypeScript, SCSS',
      },
      {
        name: '수기 거래 관리 서비스 Mobile ver. 개발',
        period: '2021.04 ~ 2021.05',
        description:
          '기존 웹앱에서만 제공 되었던 수기 거래 관리 서비스를 모바일에서도 제공할 수 있도록 개발했습니다.',
        details: [
          '웹앱과 동일한 매출, 매입 별 수기 거래 입력 플로우를 개발했습니다.',
          '과세 유형과 증빙 종류, 부가세 유무에 따라 공급가액, 세액 등이 자동으로 계산되어 유저 친화적인 UX를 구현했습니다.',
          '오너십을 가진 프로젝트에 약 1,000건 이상의 데이터가 쌓이는 값진 경험을 했습니다.',
        ],
        skills: 'Angular, Apollo Client, TypeScript, SCSS',
      },
      {
        name: '온라인 서비스 매출 조회 서비스',
        period: '2021.03 ~ 2021.04',
        description:
          '배달앱/쇼핑몰/PG사 매출 데이터를 비즈넵 서비스 내에서 쉽게 확인할 수 있는 기능을 개발했습니다.',
        details: [
          '배달앱/쇼핑몰/PG사 매출 중 부가세(정산) 내역과 정산 예정 내역 데이터를 조회할 수 있습니다.',
          'Echarts 라이브러리를 사용하여 데이터 시각화를 통해 한 눈에 들어올 수 있도록 개발했습니다.',
          '매출 조회 서비스 기능을 런칭하고 나서, 배달앱/쇼핑몰/PG사 데이터를 연동한 사업체 수가 평균 20~30개에서 100+@로 증가하게 되었던 값진 경험을 했습니다.',
        ],
        skills: 'Angular, Apollo Client, TypeScript, SCSS, TailwindCSS',
      },
      {
        name: '비즈넵 어드민 백오피스 콘솔 개발',
        period: '2021.01',
        description:
          '원활한 CS 처리와 데이터 관리를 위해 어드민 백오피스 콘솔을 개발했습니다.',
        details: [
          '비즈넵 서비스에 등록된 사업체와 유저, 연동한 홈택스 & 여신협 데이터 등을 관리할 수 있는 Table/Modal UI를 개발했습니다.',
          '원활한 데이터 연동 오류 CS 처리를 위해 백오피스 콘솔에서 어드민 권한으로 서버에 API 요청을 해 데이터를 재수집할 수 있는 플로우를 개발했습니다.',
        ],
        skills: 'Angular, Apollo Client, TypeScript, SCSS, TailwindCSS',
      },
      {
        name: '수기 거래 관리 서비스 Webapp ver. 개발',
        period: '2020.10 ~ 2020.12',
        description:
          '비즈넵 웹엡 서비스에서 매출, 매입 별 수기 거래를 입력하고 관리할 수 있는 서비스입니다.',
        details: [
          '매출, 매입 별 수기 거래 입력 플로우를 개발했습니다.',
          '과세 유형과 증빙 종류, 부가세 유무에 따라 공급가액, 세액 등이 자동으로 계산되어 유저 친화적인 UX를 구현했습니다.',
          '오너십을 가진 프로젝트에 약 1,000건 이상의 데이터가 쌓이는 값진 경험을 했습니다.',
        ],
        skills: 'Angular, Apollo Client, TypeScript, SCSS',
      },
      {
        name: '비즈넵 웹사이트 인증서 등록센터 개발',
        period: '2020.06 ~ 2020.07',
        description:
          '비즈넵 웹사이트에서 공동인증서를 모바일에 등록할 수 있는 서비스이며, 모바일/웹 플랫폼 중, 웹 플랫폼 구현을 담당했습니다.',
        details: [
          '인포텍에서 제공하는 인증서 등록 툴과 비즈넵 서버 API 요청을 연동하여 웹에서 모바일로 인증서를 등록하는 플로우를 개발했습니다.',
          '기존 jQuery로 작성된 코드를 React로 마이그레이션했습니다..',
        ],
        skills: 'React, Apollo Client, TypeScript, TailwindCSS',
      },
      {
        name: '비즈넵 세무대리인 웹앱 e2e 테스팅',
        period: '2020.04 ~ 2020.04',
        description:
          '비즈넵 세무대리인 웹앱 서비스 전체를 대상으로 visulize test를 진행했습니다.',
        details: [
          'Cypress와 Percy Framework를 사용하여 visulize test를 진행했습니다.',
        ],
        skills: 'Cypress, Percy',
      },
      {
        name: '퇴직금 계산기/가산세 계산기 개발',
        period: '2020.03 ~ 2020.04',
        description:
          '비즈넵 세무대리인 웹앱 서비스 내에서 퇴직금 계산과 가산세(과소신고·초과환급신고 가산세/무신고 가산세)를 계산할 수 있는 서비스입니다.',
        details: [
          '퇴직금과 가산세를 계산할 수 있는 로직을 개발했습니다.',
          'moment.js를 사용하여 날짜 계산을 했습니다.',
        ],
        skills: 'Angular, TypeScript, SCSS',
      },
    ],
  },
];

export const otherExperience: Experiences[] = [
  {
    experiences: [
      {
        name: 'DDD(Dynamic Designer Developer) 7기',
        period: '2022.04 ~ 2022.07',
        description: 'DDD 7기 프론트엔드 포지션 참여',
        details: ['사회 초년생들의 세탁 고민을 해결해주는 런두잇 개발 진행 중'],
        skills: 'React Native, TypeScript',
      },
    ],
  },
];
