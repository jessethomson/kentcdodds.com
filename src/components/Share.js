import React from 'react'
import { css } from '@emotion/core'
import theme from '../../config/theme'

import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
} from 'react-share'

const Share = ({ url, title, twitterHandle }) => (
  <div
    css={css`
      display: flex;
      align-items: flex-end;
      justify-content: center;
      div {
        margin-right: 20px;
        cursor: pointer;
        :hover {
          color: ${theme.brand.primary};
        }
      }
      span {
        margin-right: 20px;
        font-size: 70%;
        text-transform: uppercase;
        line-height: 2;
        opacity: 0.7;
      }
    `}
  >
    <span>Share article</span>
    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle.split('@').join('')}
    >
      Twitter
    </TwitterShareButton>
    <FacebookShareButton
      url={url}
      title={title}
      via={twitterHandle.split('@').join('')}
      css={css`
        cursor: pointer;
      `}
    >
      Facebook
    </FacebookShareButton>
  </div>
)

export default Share
