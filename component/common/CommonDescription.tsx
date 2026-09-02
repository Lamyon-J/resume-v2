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
  return (
    <ul>
      {descriptions.map((description, index) => {
        return (
          <>
            <Description description={description} key={index.toString()} />
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

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref, weight } = description;

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getLiStyle(weight)}>
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getLiStyle(weight)}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getLiStyle(weight)}>
          {renderContent(content)} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getLiStyle(weight)}>
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
        <li style={getLiStyle(weight)}>
          {renderContent(content)} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={getLiStyle(weight)}>{renderContent(content)}</li>
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
function getLiStyle(weight?: IRow.Description['weight']): CSSProperties {
  return { whiteSpace: 'pre-line', ...getFontWeight(weight) };
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
