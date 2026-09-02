import { IProject } from '../component/project/IProject';
import abijou from '../asset/abijou_logo.png';

const project: IProject.Payload = {
  disable: false,
  title: 'WORK PROJECT',
  marginTop: '20px',
  list: [
    {
      title: '아비쥬 온라인 예약 서비스',
      deployUrl: 'https://abijouonline.com',
      deployLogo: abijou,
      startedAt: '2025-12',
      endedAt: '2026-04',
      detail: '피부과 온라인 예약 서비스 - 본인인증 로그인 · 마이페이지 담당',
      skill: [
        'Next.js (App Router)',
        'React',
        'TypeScript',
        'TanStack Query',
        'Zustand',
        'React Hook Form',
        'Zod',
        'Axios',
        'Tailwind',
      ],
      descriptions: [
        {
          content:
            '로그인·예약 화면의 본인인증 폼을 단일 컴포넌트로 공통화하고 직접 적용하여 **동료의 개발 시간 단축**',
        },

        {
          content:
            'Axios 인터셉터에서 401 시 refreshToken으로 자동 재발급·원 요청 재시도 처리, \n 동시 401은 플래그와 대기열로 **중복 갱신 방지**',
        },
        {
          content:
            '로그아웃 시 사용자 종속 쿼리만 선별 제거해 잔여 refetch로 인한 **401 연쇄 재발 차단**',
        },
        {
          content:
            '여러 필드의 오류가 동시에 노출되던 문제를 Zod superRefine을 도입하여, \n 이름→휴대폰→동의 **순차 검증**되도록 개선',
        },
        {
          content:
            '동일 정렬값으로 발생한 예약 리스트 중복·누락 문제를 백엔드와 협의해 고유 ID 정렬로 해결',
        },
      ],
    },
    {
      title: '아비쥬 차트 프로그램 (EMR)',
      startedAt: '2025-07',
      endedAt: '2026-04',
      detail: '피부과 전자차트 프로그램 - 접수 현황 보드 · 코드 관리 · 영업일 관리 담당',
      skill: [
        'TypeScript',
        'React',
        'Next.js',
        'GraphQL (codegen)',
        'TanStack Query',
        'Recoil',
        'Tailwind',
      ],
      descriptions: [
        {
          content: '예약·접수·상담·준비·시술·퇴원 6단계 접수 현황 보드와 사이드바 신규 개발',
        },
        {
          content:
            '**동시 상태 변경 시나리오를 테스트**해 접수 정보 충돌 가능성을 사전 발견,\n 백엔드와 협의해 충돌 응답 분기 및 최신 상태 재조회 처리',
        },
        {
          content:
            '중복 구현된 고객 검색 UI를 공통 컴포넌트로 통합해 6개 이상 화면에서 재사용하고 **중복 코드 300줄 이상 제거**',
        },
        {
          content:
            '코드 목록의 직접 누적 구조를 useInfiniteQuery 기반으로 전환해 수정 후 이전 값이 남던 문제 해결',
        },
      ],
    },
  ],
};

export default project;
