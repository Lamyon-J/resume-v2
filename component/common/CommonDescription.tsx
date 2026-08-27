import { CSSProperties, PropsWithChildren } from 'react';

import { HrefTargetBlank } from '.';
import { IRow } from './IRow';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{ descriptions: IRow.Description[]; option?: { padding?: boolean } }>) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'pt-2' : ''}>
          {descriptions.map((description, descIndex) => {
            return (
              <>
                <Description description={description} key={descIndex.toString()} />
                {description.descriptions ? (
                  <DescriptionRecursion
                    descriptions={description.descriptions}
                    key={descIndex.toString()}
                  />
                ) : (
                  ''
                )}
              </>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  // [상황] / [수행] / [결과] 묶음은 상위 제목과 같은 위치에서 시작하도록 들여쓰기를 없앤다.
  const isLabelGroup = descriptions.some((description) => description.label);

  return (
    <ul style={isLabelGroup ? { paddingLeft: 0 } : undefined}>
      {descriptions.map((description, index) => {
        return (
          <>
            <Description
              description={description}
              inLabelGroup={isLabelGroup}
              key={index.toString()}
            />
            {description.descriptions ? (
              <DescriptionRecursion
                descriptions={description.descriptions}
                key={index.toString()}
              />
            ) : (
              ''
            )}
          </>
        );
      })}
    </ul>
  );
}

function Description({
  description,
  inLabelGroup,
}: PropsWithChildren<{ description: IRow.Description; inLabelGroup?: boolean }>) {
  const { content, href, postImage, postHref, weight, label, marginTop } = description;
  // 라벨 묶음에 섞인 일반 항목은 불릿을 안쪽에 두어 라벨과 같은 위치에서 시작한다.
  const liStyle = getLiStyle(weight, label, inLabelGroup && !label, marginTop);

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={liStyle}>
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={liStyle}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={liStyle}>
          {renderContent(content)} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={liStyle}>
          {renderContent(content)}
          <a
            href={postHref}
            target="_blank"
            style={{
              fontWeight: 500,
              marginLeft: '8px',
              fontSize: '12px',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              color: 'rgb(137, 142, 150)',
            }}
            rel="noreferrer"
          >
            블로그 포스팅↗
          </a>
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={liStyle}>
          {renderContent(content)} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={liStyle}>{renderContent(content)}</li>
      </>
    );
  })();

  return component;
}

/** content 안의 `**강조**` 를 MEDIUM 으로 그린다. */
function renderContent(content: string) {
  const tokens = content.split(/\*\*(.+?)\*\*/g);

  if (tokens.length === 1) {
    return content;
  }

  // split 의 홀수 인덱스가 `**` 로 감싸인 부분이다.
  return tokens.map((token, index) =>
    index % 2 === 1 ? (
      <span key={index.toString()} style={{ fontWeight: 500 }}>
        {token}
      </span>
    ) : (
      token
    ),
  );
}

/** content 안의 `\n` 을 줄바꿈으로 그리기 위해 whiteSpace 를 함께 지정한다. */
function getLiStyle(
  weight?: IRow.Description['weight'],
  label?: IRow.Description['label'],
  insideMarker?: boolean,
  marginTop?: IRow.Description['marginTop'],
): CSSProperties {
  return {
    whiteSpace: 'pre-line',
    ...(insideMarker ? { listStylePosition: 'inside' as const } : {}),
    ...getFontWeight(weight),
    ...getLabelStyle(label),
    // 위 두 헬퍼가 지정한 기본 여백을 덮어써야 하므로 마지막에 편다.
    ...(marginTop ? { marginTop } : {}),
  };
}

/** [상황] / [수행] / [결과] 라벨은 상위 제목과 달리 색·크기를 그대로 두고 굵기만 올린다. */
function getLabelStyle(label?: IRow.Description['label']): CSSProperties {
  if (!label) {
    return {};
  }

  // 라벨 줄은 불릿 없이 노출한다.
  return { fontWeight: 600, marginTop: '10px', listStyleType: 'none' };
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }

  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
    marginTop: '10px',
    fontSize: '20px',
    color: '#3c78d8',
  };
}

// Pretendard Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  //
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};
