import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {props.headComponents}
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/933620899&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/djdashny" title="DasH" target="_blank" style="color: #cccccc; text-decoration: none;">DasH</a> · <a href="https://soundcloud.com/djdashny/no-te-enamores-remix-farruko-x-milly-x-jay-wheeler-x-nio-garcia-intro-105bpm-djdashny-mp3" title="No te enamores (Remix) - Farruko x Milly x Jay Wheeler x Nio Garcia - Intro 105bpm - @DJDASHNY .mp3" target="_blank" style="color: #cccccc; text-decoration: none;">No te enamores (Remix) - Farruko x Milly x Jay Wheeler x Nio Garcia - Intro 105bpm - @DJDASHNY .mp3</a></div>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
