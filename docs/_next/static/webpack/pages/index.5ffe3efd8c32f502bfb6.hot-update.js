webpackHotUpdate_N_E("pages/index",{

/***/ "./payload/sideProject.ts":
/*!********************************!*\
  !*** ./payload/sideProject.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var sideProject = {
  disable: false,
  title: 'SIDE PROJECT',
  list: [{
    title: '피키토키(Picki Talki)',
    githubUrl: 'https://github.com/dnd-side-project/dnd-12th-4-frontend',
    startedAt: '2024-12',
    endedAt: '2025-02',
    detail: '한때 가까웠지만 소원해진 그룹을 자연스럽게 다시 연결하고 추억을 함께 쌓는 관계 회복 서비스 ​ (디자이너 2 BE 2 FE 2)',
    skill: ['TypeScript', 'Next.js', 'NextAuth', 'Tanstack Query', 'Zustand', 'React Hook Form', 'Tailwind'],
    descriptions: [{
      content: '카카오 소셜 로그인을 구현하며, 서버 사이드에서 사용자 인증과 채널 정보를 검증해 상황에 따라 리다이렉트 처리'
    }, {
      content: '유휴 상태로 토큰이 만료돼도 jwt 콜백이 실행되지 않아 만료된 세션이 유지되던 이슈를,\n주기적 만료 체크와 useSession update 호출로 jwt 콜백을 실행해 세션을 갱신하며 해결',
      postHref: 'https://hjdevlog0.tistory.com/11'
    }, {
      content: '회원가입 과정(닉네임 설정·채널 생성·초대 코드 입력)을 **퍼널(Funnel) 패턴**으로 단계화하고,\nreact-hook-form과 zodResolver로 각 단계 유효성 검증을 상위 컴포넌트에서 통합 관리',
      postHref: 'https://hjdevlog0.tistory.com/12'
    }]
  }, {
    title: '올인원 면접 서비스 SULSUL',
    // marginTop: '170px',
    githubUrl: 'https://github.com/sulsulsulsul/sulsul',
    startedAt: '2024-07',
    endedAt: '2024-10',
    detail: '나의 자소서 기반으로 면접질문 예측 및 면접기출 100선 제공 서비스  (PM/디자이너  1 BE 2 FE 4)',
    skill: ['TypeScript', 'Next.js', 'Tanstack Query', 'Zustand', 'React Hook Form', 'Tailwind'],
    descriptions: [{
      content: '속도 저하 피드백에서 배포 환경 설정이 원인임을 파악해 사용자와 가장 가까운 서버에서\n 리소스를 제공하도록 재설정하여** 서버 응답 속도 21% 개선 (Lighthouse 56 → 86)**',
      postHref: 'https://velog.io/@hyunjun9788/varcel-%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EC%86%8D%EB%8F%84%EA%B0%80-%EB%8A%90%EB%A0%A4%EC%A7%84-%EC%9D%B4%EC%8A%88'
    }, {
      content: '답변 개수가 많을 때 불필요한 데이터 fetching으로 초기 로딩이 느려지는 문제를,\nuseInfiniteQuery 캐싱 기반 무한 스크롤과 로딩 스켈레톤 UI로 개선',
      postHref: 'https://velog.io/@hyunjun9788/%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%8B%A4%EC%9D%8C-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B9%8C%EC%A7%80-%EB%AF%B8%EB%A6%AC-%EA%B0%80%EC%A0%B8%EC%98%A4%EB%8A%94-%EC%9D%B4%EC%8A%88'
    } // {
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
    ]
  }, {
    title: 'WDYTA (이거어때)',
    githubUrl: 'https://github.com/Codeit-Part4-SFJs/WDYTA',
    startedAt: '2024-05',
    endedAt: '2024-06',
    detail: '음악, 식당, 영화, 전자기기 등 다양한 분야의 상품을 리뷰하는 플랫폼 (FE 5)',
    skill: ['TypeScript', 'Next.js', 'Tanstack Query', 'Zustand', 'React Hook Form', 'Tailwind'],
    descriptions: [{
      content: '아이콘·이미지·상품 카드 UI를 TypeScript + SVGR로 모듈화해 props 기반 타입 안전성을 확보하고,\n**TSDoc과 PR로 스타일 가이드를 문서화해 팀 내 사용 기준 공유**',
      postHref: 'https://velog.io/@hyunjun9788/WDYTA-Icon-Image'
    }, {
      content: 'next/image fill의 sizes 기본값(100vw)으로 실제 표시 크기와 무관하게 이미지를 요청하던 것이 원인임을 파악해,\n요소별 렌더링 크기를 지정하고 next.config의 imageSizes·deviceSizes를 정리하여\n**이미지 로딩 시간 1.8s → 1.1s 단축 (약 38% 개선)**',
      postHref: 'https://velog.io/@hyunjun9788/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94-prefetch'
    } // {
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
    ]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (sideProject);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9zaWRlUHJvamVjdC50cyJdLCJuYW1lcyI6WyJzaWRlUHJvamVjdCIsImRpc2FibGUiLCJ0aXRsZSIsImxpc3QiLCJnaXRodWJVcmwiLCJzdGFydGVkQXQiLCJlbmRlZEF0IiwiZGV0YWlsIiwic2tpbGwiLCJkZXNjcmlwdGlvbnMiLCJjb250ZW50IiwicG9zdEhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBLGtEQUFNQSxXQUE2QixHQUFHO0FBQ3BDQyxTQUFPLEVBQUUsS0FEMkI7QUFFcENDLE9BQUssRUFBRSxjQUY2QjtBQUdwQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUQsU0FBSyxFQUFFLG1CQURUO0FBRUVFLGFBQVMsRUFBRSx5REFGYjtBQUdFQyxhQUFTLEVBQUUsU0FIYjtBQUlFQyxXQUFPLEVBQUUsU0FKWDtBQUtFQyxVQUFNLEVBQ0osMEVBTko7QUFPRUMsU0FBSyxFQUFFLENBQ0wsWUFESyxFQUVMLFNBRkssRUFHTCxVQUhLLEVBSUwsZ0JBSkssRUFLTCxTQUxLLEVBTUwsaUJBTkssRUFPTCxVQVBLLENBUFQ7QUFnQkVDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQ0w7QUFGSixLQURZLEVBS1o7QUFDRUEsYUFBTyxFQUNMLDZHQUZKO0FBR0VDLGNBQVEsRUFBRTtBQUhaLEtBTFksRUFVWjtBQUNFRCxhQUFPLEVBQ0wsd0hBRko7QUFHRUMsY0FBUSxFQUFFO0FBSFosS0FWWTtBQWhCaEIsR0FESSxFQWtDSjtBQUNFVCxTQUFLLEVBQUUsbUJBRFQ7QUFFRTtBQUNBRSxhQUFTLEVBQUUsd0NBSGI7QUFJRUMsYUFBUyxFQUFFLFNBSmI7QUFLRUMsV0FBTyxFQUFFLFNBTFg7QUFNRUMsVUFBTSxFQUNKLGdFQVBKO0FBUUVDLFNBQUssRUFBRSxDQUFDLFlBQUQsRUFBZSxTQUFmLEVBQTBCLGdCQUExQixFQUE0QyxTQUE1QyxFQUF1RCxpQkFBdkQsRUFBMEUsVUFBMUUsQ0FSVDtBQVNFQyxnQkFBWSxFQUFFLENBQ1o7QUFDRUMsYUFBTyxFQUNMLDZHQUZKO0FBR0VDLGNBQVEsRUFDTjtBQUpKLEtBRFksRUFPWjtBQUNFRCxhQUFPLEVBQ0wsaUdBRko7QUFHRUMsY0FBUSxFQUNOO0FBSkosS0FQWSxDQWFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERZO0FBVGhCLEdBbENJLEVBOEZKO0FBQ0VULFNBQUssRUFBRSxjQURUO0FBRUVFLGFBQVMsRUFBRSw0Q0FGYjtBQUdFQyxhQUFTLEVBQUUsU0FIYjtBQUlFQyxXQUFPLEVBQUUsU0FKWDtBQUtFQyxVQUFNLEVBQUUsZ0RBTFY7QUFNRUMsU0FBSyxFQUFFLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEIsZ0JBQTFCLEVBQTRDLFNBQTVDLEVBQXVELGlCQUF2RCxFQUEwRSxVQUExRSxDQU5UO0FBT0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQ0wsNkdBRko7QUFHRUMsY0FBUSxFQUFFO0FBSFosS0FEWSxFQU1aO0FBQ0VELGFBQU8sRUFDTCxnTEFGSjtBQUdFQyxjQUFRLEVBQ047QUFKSixLQU5ZLENBWVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0NZO0FBUGhCLEdBOUZJO0FBSDhCLENBQXRDO0FBMkplWCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZmZlM2VmZDhjMzJmNTAyYmZiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByb2plY3QgfSBmcm9tICcuLi9jb21wb25lbnQvcHJvamVjdC9JUHJvamVjdCc7XG5cbmNvbnN0IHNpZGVQcm9qZWN0OiBJUHJvamVjdC5QYXlsb2FkID0ge1xuICBkaXNhYmxlOiBmYWxzZSxcbiAgdGl0bGU6ICdTSURFIFBST0pFQ1QnLFxuICBsaXN0OiBbXG4gICAge1xuICAgICAgdGl0bGU6ICftlLztgqTthqDtgqQoUGlja2kgVGFsa2kpJyxcbiAgICAgIGdpdGh1YlVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kbmQtc2lkZS1wcm9qZWN0L2RuZC0xMnRoLTQtZnJvbnRlbmQnLFxuICAgICAgc3RhcnRlZEF0OiAnMjAyNC0xMicsXG4gICAgICBlbmRlZEF0OiAnMjAyNS0wMicsXG4gICAgICBkZXRhaWw6XG4gICAgICAgICftlZzrlYwg6rCA6rmM7Jug7KeA66eMIOyGjOybkO2VtOynhCDqt7jro7nsnYQg7J6Q7Jew7Iqk65+96rKMIOuLpOyLnCDsl7DqsrDtlZjqs6Ag7LaU7Ja17J2EIO2VqOq7mCDsjJPripQg6rSA6rOEIO2ajOuztSDshJzruYTsiqQg4oCLICjrlJTsnpDsnbTrhIggMiBCRSAyIEZFIDIpJyxcbiAgICAgIHNraWxsOiBbXG4gICAgICAgICdUeXBlU2NyaXB0JyxcbiAgICAgICAgJ05leHQuanMnLFxuICAgICAgICAnTmV4dEF1dGgnLFxuICAgICAgICAnVGFuc3RhY2sgUXVlcnknLFxuICAgICAgICAnWnVzdGFuZCcsXG4gICAgICAgICdSZWFjdCBIb29rIEZvcm0nLFxuICAgICAgICAnVGFpbHdpbmQnLFxuICAgICAgXSxcbiAgICAgIGRlc2NyaXB0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICfsubTsubTsmKQg7IaM7IWcIOuhnOq3uOyduOydhCDqtaztmITtlZjrqbAsIOyEnOuyhCDsgqzsnbTrk5zsl5DshJwg7IKs7Jqp7J6QIOyduOymneqzvCDssYTrhJAg7KCV67O066W8IOqygOymne2VtCDsg4Htmansl5Ag65Sw6528IOumrOuLpOydtOugie2KuCDsspjrpqwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICfsnKDtnLQg7IOB7YOc66GcIO2GoO2BsOydtCDrp4zro4zrj7zrj4Qgand0IOy9nOuwseydtCDsi6TtlonrkJjsp4Ag7JWK7JWEIOunjOujjOuQnCDshLjshZjsnbQg7Jyg7KeA65CY642YIOydtOyKiOulvCxcXG7so7zquLDsoIEg66eM66OMIOyytO2BrOyZgCB1c2VTZXNzaW9uIHVwZGF0ZSDtmLjstpzroZwgand0IOy9nOuwseydhCDsi6TtlontlbQg7IS47IWY7J2EIOqwseyLoO2VmOupsCDtlbTqsrAnLFxuICAgICAgICAgIHBvc3RIcmVmOiAnaHR0cHM6Ly9oamRldmxvZzAudGlzdG9yeS5jb20vMTEnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICftmozsm5DqsIDsnoUg6rO87KCVKOuLieuEpOyehCDshKTsoJXCt+yxhOuEkCDsg53shLHCt+y0iOuMgCDsvZTrk5wg7J6F66ClKeydhCAqKu2NvOuEkChGdW5uZWwpIO2MqO2EtCoq7Jy866GcIOuLqOqzhO2ZlO2VmOqzoCxcXG5yZWFjdC1ob29rLWZvcm3qs7wgem9kUmVzb2x2ZXLroZwg6rCBIOuLqOqzhCDsnKDtmqjshLEg6rKA7Kad7J2EIOyDgeychCDsu7Ttj6zrhIztirjsl5DshJwg7Ya17ZWpIOq0gOumrCcsXG4gICAgICAgICAgcG9zdEhyZWY6ICdodHRwczovL2hqZGV2bG9nMC50aXN0b3J5LmNvbS8xMicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfsmKzsnbjsm5Ag66m07KCRIOyEnOu5hOyKpCBTVUxTVUwnLFxuICAgICAgLy8gbWFyZ2luVG9wOiAnMTcwcHgnLFxuICAgICAgZ2l0aHViVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL3N1bHN1bHN1bHN1bC9zdWxzdWwnLFxuICAgICAgc3RhcnRlZEF0OiAnMjAyNC0wNycsXG4gICAgICBlbmRlZEF0OiAnMjAyNC0xMCcsXG4gICAgICBkZXRhaWw6XG4gICAgICAgICfrgpjsnZgg7J6Q7IaM7IScIOq4sOuwmOycvOuhnCDrqbTsoJHsp4jrrLgg7JiI7LihIOuwjyDrqbTsoJHquLDstpwgMTAw7ISgIOygnOqztSDshJzruYTsiqQgIChQTS/rlJTsnpDsnbTrhIggIDEgQkUgMiBGRSA0KScsXG4gICAgICBza2lsbDogWydUeXBlU2NyaXB0JywgJ05leHQuanMnLCAnVGFuc3RhY2sgUXVlcnknLCAnWnVzdGFuZCcsICdSZWFjdCBIb29rIEZvcm0nLCAnVGFpbHdpbmQnXSxcbiAgICAgIGRlc2NyaXB0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICfsho3rj4Qg7KCA7ZWYIO2UvOuTnOuwseyXkOyEnCDrsLDtj6wg7ZmY6rK9IOyEpOygleydtCDsm5DsnbjsnoTsnYQg7YyM7JWF7ZW0IOyCrOyaqeyekOyZgCDqsIDsnqUg6rCA6rmM7Jq0IOyEnOuyhOyXkOyEnFxcbiDrpqzshozsiqTrpbwg7KCc6rO17ZWY64+E66GdIOyerOyEpOygle2VmOyXrCoqIOyEnOuyhCDsnZHri7Ug7IaN64+EIDIxJSDqsJzshKAgKExpZ2h0aG91c2UgNTYg4oaSIDg2KSoqJyxcbiAgICAgICAgICBwb3N0SHJlZjpcbiAgICAgICAgICAgICdodHRwczovL3ZlbG9nLmlvL0BoeXVuanVuOTc4OC92YXJjZWwtJUVCJUIwJUIwJUVEJThGJUFDLSVFRCU5QiU4NC0lRUMlODYlOEQlRUIlOEYlODQlRUElQjAlODAtJUVCJThBJTkwJUVCJUEwJUE0JUVDJUE3JTg0LSVFQyU5RCVCNCVFQyU4QSU4OCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgJ+uLteuzgCDqsJzsiJjqsIAg66eO7J2EIOuVjCDrtojtlYTsmpTtlZwg642w7J207YSwIGZldGNoaW5n7Jy866GcIOy0iOq4sCDroZzrlKnsnbQg64qQ66Ck7KeA64qUIOusuOygnOulvCxcXG51c2VJbmZpbml0ZVF1ZXJ5IOy6kOyLsSDquLDrsJgg66y07ZWcIOyKpO2BrOuhpOqzvCDroZzrlKkg7Iqk7LyI66CI7YakIFVJ66GcIOqwnOyEoCcsXG4gICAgICAgICAgcG9zdEhyZWY6XG4gICAgICAgICAgICAnaHR0cHM6Ly92ZWxvZy5pby9AaHl1bmp1bjk3ODgvJUVCJUFDJUI0JUVEJTk1JTlDJUVDJThBJUE0JUVEJTgxJUFDJUVCJUExJUE0LSVFQiU4QiVBNCVFQyU5RCU4Qy0lRUQlOEUlOTglRUMlOUQlQjQlRUMlQTclODAlRUElQjklOEMlRUMlQTclODAtJUVCJUFGJUI4JUVCJUE2JUFDLSVFQSVCMCU4MCVFQyVBMCVCOCVFQyU5OCVBNCVFQiU4QSU5NC0lRUMlOUQlQjQlRUMlOEElODgnLFxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgY29udGVudDpcbiAgICAgICAgLy8gICAgICfri6TslpHtlZwg7ZmU66m0IO2BrOq4sOyZgCDrlJTrsJTsnbTsiqTsl5DshJwg7J286rSA65CcIOqyve2XmOydhCDsoJzqs7XtlZjrj4TroZ0g67CY7J2R7ZiVIOuUlOyekOyduCDrsI8g7Iqk7YOA7J2866eBIOq1rO2YhCcsXG4gICAgICAgIC8vICAgd2VpZ2h0OiAnU0VNSV9CT0xEJyxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGNvbnRlbnQ6ICfquLDstpzrrLjsoJwg7Y6Y7J207KeAIOqwnOuwnCcsXG4gICAgICAgIC8vICAgZGVzY3JpcHRpb25zOiBbXSxcbiAgICAgICAgLy8gICB3ZWlnaHQ6ICdTRU1JX0JPTEQnLFxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgY29udGVudDogJ+uLteuzgCDrk7HroZ0g67CPIOyImOyglSDtj7wg6rCc67CcJyxcbiAgICAgICAgLy8gICB3ZWlnaHQ6ICdTRU1JX0JPTEQnLFxuXG4gICAgICAgIC8vICAgZGVzY3JpcHRpb25zOiBbXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgIGNvbnRlbnQ6XG4gICAgICAgIC8vICAgICAgICAgJ+uLteuzgCDsnpDrj5kg7J6E7IucIOyggOyepSDrsI8g67aI65+s7Jik6riwIOq4sOuKpeydhCDshLjshZgg64+Z7JWI66eMIOycoO2aqO2VmOuPhOuhnSDtlZjquLAg7JyE7ZW0IFNlc3Npb25TdG9yYWdl66W8IOyCrOyaqe2VmOyXrCDqsJzrsJwnLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICBdLFxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgY29udGVudDogJ+uLteuzgCDsoITssrQg67O06riwIOuqqOuLrCDqsJzrsJwnLFxuICAgICAgICAvLyAgIHdlaWdodDogJ1NFTUlfQk9MRCcsXG5cbiAgICAgICAgLy8gICBkZXNjcmlwdGlvbnM6IFtcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgY29udGVudDpcbiAgICAgICAgLy8gICAgICAgICAn7LaU7LKcIOyggeyaqeyXkCDrjIDtlbQg7KaJ6rCB7KCB7J24IOuwmOydkeydhCDrs7TsnbTqs6DsnpAg7LaU7LKcIOuyhO2KvCDtgbTrpq0g7IucIE9wdGltaXN0aWMgVXBkYXRlIOyggeyaqScsXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICBjb250ZW50OlxuICAgICAgICAvLyAgICAgICAgICftmITsnqwg64Kg7Kec66W8IOq4sOykgOycvOuhnCDstZzqt7wgNOyjvOywqCBzZWxlY3RCb3jrpbwg6rWs7ZiE7ZWY7JesIOyjvOywqOyXkCDtlbTri7ntlZjripQg642w7J207YSwIO2MqOy5rSDqtaztmIQnLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICBdLFxuICAgICAgICAvLyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnV0RZVEEgKOydtOqxsOyWtOuVjCknLFxuICAgICAgZ2l0aHViVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL0NvZGVpdC1QYXJ0NC1TRkpzL1dEWVRBJyxcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjQtMDUnLFxuICAgICAgZW5kZWRBdDogJzIwMjQtMDYnLFxuICAgICAgZGV0YWlsOiAn7J2M7JWFLCDsi53ri7ksIOyYge2ZlCwg7KCE7J6Q6riw6riwIOuTsSDri6TslpHtlZwg67aE7JW87J2YIOyDge2SiOydhCDrpqzrt7DtlZjripQg7ZSM656r7Y+8IChGRSA1KScsXG4gICAgICBza2lsbDogWydUeXBlU2NyaXB0JywgJ05leHQuanMnLCAnVGFuc3RhY2sgUXVlcnknLCAnWnVzdGFuZCcsICdSZWFjdCBIb29rIEZvcm0nLCAnVGFpbHdpbmQnXSxcbiAgICAgIGRlc2NyaXB0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICfslYTsnbTsvZjCt+ydtOuvuOyngMK37IOB7ZKIIOy5tOuTnCBVSeulvCBUeXBlU2NyaXB0ICsgU1ZHUuuhnCDrqqjrk4jtmZTtlbQgcHJvcHMg6riw67CYIO2DgOyehSDslYjsoITshLHsnYQg7ZmV67O07ZWY6rOgLFxcbioqVFNEb2Pqs7wgUFLroZwg7Iqk7YOA7J28IOqwgOydtOuTnOulvCDrrLjshJztmZTtlbQg7YyAIOuCtCDsgqzsmqkg6riw7KSAIOqzteycoCoqJyxcbiAgICAgICAgICBwb3N0SHJlZjogJ2h0dHBzOi8vdmVsb2cuaW8vQGh5dW5qdW45Nzg4L1dEWVRBLUljb24tSW1hZ2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICduZXh0L2ltYWdlIGZpbGzsnZggc2l6ZXMg6riw67O46rCSKDEwMHZ3KeycvOuhnCDsi6TsoJwg7ZGc7IucIO2BrOq4sOyZgCDrrLTqtIDtlZjqsowg7J2066+47KeA66W8IOyalOyyre2VmOuNmCDqsoPsnbQg7JuQ7J247J6E7J2EIO2MjOyVhe2VtCxcXG7smpTshozrs4Qg66CM642U66eBIO2BrOq4sOulvCDsp4DsoJXtlZjqs6AgbmV4dC5jb25maWfsnZggaW1hZ2VTaXplc8K3ZGV2aWNlU2l6ZXPrpbwg7KCV66as7ZWY7JesXFxuKirsnbTrr7jsp4Ag66Gc65SpIOyLnOqwhCAxLjhzIOKGkiAxLjFzIOuLqOy2lSAo7JW9IDM4JSDqsJzshKApKionLFxuICAgICAgICAgIHBvc3RIcmVmOlxuICAgICAgICAgICAgJ2h0dHBzOi8vdmVsb2cuaW8vQGh5dW5qdW45Nzg4LyVFRCU5NCU4NCVFQiVBMSU5QyVFQyVBMCU5RCVFRCU4QSVCOC0lRUMlODQlQjElRUIlOEElQTUtJUVBJUIwJTlDJUVDJTg0JUEwLSVFQyU5RCVCNCVFQiVBRiVCOCVFQyVBNyU4MC0lRUMlQjUlOUMlRUMlQTAlODElRUQlOTklOTQtcHJlZmV0Y2gnLFxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgY29udGVudDogJ+2UhOuhnO2VhCDtjpjsnbTsp4Ag6rCc67CcJyxcbiAgICAgICAgLy8gICB3ZWlnaHQ6ICdTRU1JX0JPTEQnLFxuICAgICAgICAvLyAgIGRlc2NyaXB0aW9uczogW1xuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICBjb250ZW50OlxuICAgICAgICAvLyAgICAgICAgICdwcmVmZXRjaFF1ZXJ5IOuPhOyehe2VmOyXrCDsg4Htkogg7Lm065OcIOuhnOuUqSDsho3rj4QgNTY2bXMtPjMwN21zIOq5jOyngCDri6jstpXtlZjsl6wg7JW9IDQ1JSDshLHriqUg6rCc7ISgJyxcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgIGNvbnRlbnQ6ICfsgqzsmqnsnpDsl5Dqsowg7KaJ7IucIOuwmOydkeydhCDrs7TsnbTquLAg7JyE7ZW0IO2MlOuhnOyasCDrsoTtirzsl5AgT3B0aW1pc3RpYyBVcGRhdGUg7KCB7JqpJyxcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgXSxcbiAgICAgICAgLy8gfSxcblxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgY29udGVudDogJ+2MlOuhnOyasCDrqqjri6wg6rCc67CcICcsXG4gICAgICAgIC8vICAgd2VpZ2h0OiAnU0VNSV9CT0xEJyxcbiAgICAgICAgLy8gICBkZXNjcmlwdGlvbnM6IFtcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgY29udGVudDogJ3ByZWZldGNoUXVlcnnrpbwg64+E7J6F7ZWY7JesIO2MlOuhnOybjCwg7YyU66Gc7J6JIOycoOyggCDrqqnroZ0g66Gc65SpIOyGjeuPhCDslb0gNTIlIOqwnOyEoCcsXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgeyBjb250ZW50OiAn66y07ZWc7Iqk7YGs66GkIOuwjyDsiqTsvIjroIjthqQgVUkg7KCB7JqpJyB9LFxuICAgICAgICAvLyAgIF0sXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBjb250ZW50OiAnUkVTVCBBUEkg7JeU65Oc7Y+s7J247Yq4IOyEpOqzhCcsXG4gICAgICAgIC8vICAgd2VpZ2h0OiAnU0VNSV9CT0xEJyxcbiAgICAgICAgLy8gICBkZXNjcmlwdGlvbnM6IFtcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgY29udGVudDpcbiAgICAgICAgLy8gICAgICAgICAnUkVTVCBBUEkg7JeU65Oc7Y+s7J247Yq4IOyEpOqzhOulvCDthrXtlbQg7Zqo7Jyo7KCB7J24IOuNsOydtO2EsCDtnZDrpoTsnYQg6rWs7LaV7ZWY6rOgLCDtgbTrnbzsnbTslrjtirgt7ISc67KEIOqwhCDthrXsi6Ag7JWI7KCV7ISx7J2EIOuGkuyehCcsXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgIF0sXG4gICAgICAgIC8vIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlUHJvamVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=