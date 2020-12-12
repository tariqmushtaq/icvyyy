import React from "react"
import { graphql } from "gatsby"
import {documentToReactComponents} from "@contentful/rich-text-html-renderer"

const OurCorePage = ({ data }) => {

    const rte = data.contentfulOurCorePage.content

    console.log(rte)

    return(
        <>
            <p>asdas</p>
        </>
    )

}
export const query = graphql`
  {
    contentfulOurCorePage {
      content {
        raw
      }
    }
  }
`

export default OurCorePage

