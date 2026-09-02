import { IProject } from '../component/project/IProject';

const sideProject: IProject.Payload = {
  disable: false,
  title: 'SIDE PROJECT',
  list: [
    {
      title: '피키토키(Picki Talki)',
      githubUrl: 'https://github.com/dnd-side-project/dnd-12th-4-frontend',
      startedAt: '2024-12',
      endedAt: '2025-02',
      detail:
        '한때 가까웠지만 소원해진 그룹을 자연스럽게 다시 연결하고 추억을 함께 쌓는 관계 회복 서비스 ​ (디자이너 2 BE 2 FE 2)',
      skill: [
        'TypeScript',
        'Next.js',
        'NextAuth',
        'Tanstack Query',
        'Zustand',
        'React Hook Form',
        'Tailwind',
      ],
      descriptions: [
        {
          content:
            '카카오 소셜 로그인을 구현하며, 서버 사이드에서 사용자 인증과 채널 정보를 검증해 상황에 따라 리다이렉트 처리',
        },
        {
          content:
            '유휴 상태로 토큰이 만료돼도 jwt 콜백이 실행되지 않아 만료된 세션이 유지되던 이슈를,\n주기적 만료 체크와 useSession update 호출로 jwt 콜백을 실행해 세션을 갱신하며 해결',
          postHref: 'https://hjdevlog0.tistory.com/11',
        },
        {
          content:
            '회원가입 과정(닉네임 설정·채널 생성·초대 코드 입력)을 **퍼널(Funnel) 패턴**으로 단계화하고,\nreact-hook-form과 zodResolver로 각 단계 유효성 검증을 상위 컴포넌트에서 통합 관리',
          postHref: 'https://hjdevlog0.tistory.com/12',
        },
      ],
    },
    {
      title: '올인원 면접 서비스 SULSUL',
      // marginTop: '170px',
      githubUrl: 'https://github.com/sulsulsulsul/sulsul',
      startedAt: '2024-07',
      endedAt: '2024-10',
      detail:
        '나의 자소서 기반으로 면접질문 예측 및 면접기출 100선 제공 서비스  (PM/디자이너  1 BE 2 FE 4)',
      skill: ['TypeScript', 'Next.js', 'Tanstack Query', 'Zustand', 'React Hook Form', 'Tailwind'],
      descriptions: [
        {
          content:
            '속도 저하 피드백에서 배포 환경 설정이 원인임을 파악해 사용자와 가장 가까운 서버에서\n 리소스를 제공하도록 재설정하여**서버 응답 속도 21% 개선 (Lighthouse 56 → 86)**',
          postHref:
            'https://velog.io/@hyunjun9788/varcel-%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EC%86%8D%EB%8F%84%EA%B0%80-%EB%8A%90%EB%A0%A4%EC%A7%84-%EC%9D%B4%EC%8A%88',
        },
        {
          content:
            '답변 개수가 많을 때 불필요한 데이터 fetching으로 초기 로딩이 느려지는 문제를,\nuseInfiniteQuery 캐싱 기반 무한 스크롤과 로딩 스켈레톤 UI로 개선',
          postHref:
            'https://velog.io/@hyunjun9788/%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%8B%A4%EC%9D%8C-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B9%8C%EC%A7%80-%EB%AF%B8%EB%A6%AC-%EA%B0%80%EC%A0%B8%EC%98%A4%EB%8A%94-%EC%9D%B4%EC%8A%88',
        },
        // {
        //   content:
        //     '다양한 화면 크기와 디바이스에서 일관된 경험을 제공하도록 반응형 디자인 및 스타일링 구현',
        //   weight: 'SEMI_BOLD',
        // },
        // {
        //   content: '기출문제 페이지 개발',
        //   descriptions: [],
        //   weight: 'SEMI_BOLD',
        // },
        // {
        //   content: '답변 등록 및 수정 폼 개발',
        //   weight: 'SEMI_BOLD',

        //   descriptions: [
        //     {
        //       content:
        //         '답변 자동 임시 저장 및 불러오기 기능을 세션 동안만 유효하도록 하기 위해 SessionStorage를 사용하여 개발',
        //     },
        //   ],
        // },
        // {
        //   content: '답변 전체 보기 모달 개발',
        //   weight: 'SEMI_BOLD',

        //   descriptions: [
        //     {
        //       content:
        //         '추천 적용에 대해 즉각적인 반응을 보이고자 추천 버튼 클릭 시 Optimistic Update 적용',
        //     },
        //     {
        //       content:
        //         '현재 날짜를 기준으로 최근 4주차 selectBox를 구현하여 주차에 해당하는 데이터 패칭 구현',
        //     },
        //   ],
        // },
      ],
    },
    {
      title: 'WDYTA (이거어때)',
      githubUrl: 'https://github.com/Codeit-Part4-SFJs/WDYTA',
      startedAt: '2024-05',
      endedAt: '2024-06',
      detail: '음악, 식당, 영화, 전자기기 등 다양한 분야의 상품을 리뷰하는 플랫폼 (FE 5)',
      skill: ['TypeScript', 'Next.js', 'Tanstack Query', 'Zustand', 'React Hook Form', 'Tailwind'],
      descriptions: [
        {
          content:
            '아이콘·이미지·상품 카드 UI를 TypeScript + SVGR로 모듈화해 props 기반 타입 안전성을 확보하고,\n**TSDoc과 PR로 스타일 가이드를 문서화해 팀 내 사용 기준 공유**',
          postHref: 'https://velog.io/@hyunjun9788/WDYTA-Icon-Image',
        },
        {
          content:
            'next/image fill의 sizes 기본값(100vw)으로 실제 표시 크기와 무관하게 이미지를 요청하던 것이 원인임을 파악해,\n요소별 렌더링 크기를 지정하고 next.config의 imageSizes·deviceSizes를 정리하여\n**이미지 로딩 시간 1.8s → 1.1s 단축 (약 38% 개선)**',
          postHref:
            'https://velog.io/@hyunjun9788/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94-prefetch',
        },
        // {
        //   content: '프로필 페이지 개발',
        //   weight: 'SEMI_BOLD',
        //   descriptions: [
        //     {
        //       content:
        //         'prefetchQuery 도입하여 상품 카드 로딩 속도 566ms->307ms 까지 단축하여 약 45% 성능 개선',
        //     },
        //     {
        //       content: '사용자에게 즉시 반응을 보이기 위해 팔로우 버튼에 Optimistic Update 적용',
        //     },
        //   ],
        // },

        // {
        //   content: '팔로우 모달 개발 ',
        //   weight: 'SEMI_BOLD',
        //   descriptions: [
        //     {
        //       content: 'prefetchQuery를 도입하여 팔로워, 팔로잉 유저 목록 로딩 속도 약 52% 개선',
        //     },
        //     { content: '무한스크롤 및 스켈레톤 UI 적용' },
        //   ],
        // },
        // {
        //   content: 'REST API 엔드포인트 설계',
        //   weight: 'SEMI_BOLD',
        //   descriptions: [
        //     {
        //       content:
        //         'REST API 엔드포인트 설계를 통해 효율적인 데이터 흐름을 구축하고, 클라이언트-서버 간 통신 안정성을 높임',
        //     },
        //   ],
        // },
      ],
    },
  ],
};

export default sideProject;
