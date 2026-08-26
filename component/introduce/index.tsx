import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  // const latestUpdated = DateTime.fromFormat(
  //   payload.latestUpdated,
  //   Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  // );
  // const latestUpdatedByNow = Math.floor(
  //   DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  // );

  return (
    // 프로필 이미지 래퍼의 pb-3 가 이미 여백을 만들어 공통 값보다 좁게 잡는다.
    <div style={{ ...Style.section, marginTop: '10px' }}>
      <Row>
        <Col sm={12} md={3}>
          <h2 style={{ ...Style.blue, ...Style.sectionTitle }}>INTRODUCE</h2>
        </Col>
        <Col sm={12} md={9}>
          {payload.contents.map((_, index) => (
            <p key={index.toString()} style={{ marginBottom: 0 }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '20px' }}>
                동료와 사용자의 시간을 아끼는 프론트엔드 개발자{' '}
                <span style={{ color: '#3c78d8' }}>남현준</span>입니다.
              </h3>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '4px 20px',
                  marginTop: '20px',
                  marginBottom: 0,
                }}
              >
                <li>
                  본인인증 폼과 이미지 컴포넌트를{' '}
                  <span style={{ fontWeight: 600 }}>공통화해 반복 개발을 줄였고</span>, 동료로부터
                  <span style={{ fontStyle: 'italic', color: '#898e96' }}>
                    {' '}
                    &apos;덕분에 편하게 개발했다&apos;
                  </span>
                  는 피드백을 받았습니다.
                </li>
                <li>
                  이미지 최적화를 통해{' '}
                  <span style={{ fontWeight: 600 }}>
                    초기 이미지 로딩 시간을 1.8초 → 1.1초로 단축
                  </span>
                  한 경험이 있습니다.
                </li>
                <li>
                  사용자가 실제로 마주칠 수 있는{' '}
                  <span style={{ fontWeight: 600 }}>
                    동시 조작·중복 요청 같은 예외 상황을 미리 상상하고 검증
                  </span>
                  하는 것을 중요하게 생각합니다.
                </li>
              </ul>
            </p>
          ))}
          {/* <p className="text-right">
            <small>Latest Updated</small>{' '}
            <Badge color="secondary">
              {`${latestUpdated.toFormat(Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD)}`}
            </Badge>
          </p>
          <p className="text-right" style={Style.sign}>
            {payload.sign}
          </p> */}
        </Col>
      </Row>
    </div>
  );
}
