import React from "react"
import Layout from "../components/layout"

export default function NotFromWiki({ data }) {
  console.log(data)

  return (
    <Layout>
      <div>
        <p>&emsp;
          The second (and main) layer of the narrative is the correspondence
          between the two characters, which is literally carried out in the
          margins of this "library" book. The printing is so high quality that
          it literally feels like the pages were written in pens and pencils. In
          this same correspondence, as I understand it, the plot develops. And
          the third layer is the many postcards, letters, documents, and maps
          enclosed in the book as bookmarks, which the characters exchange and
          which also complete and develop the story. The map in the fourth photo
          is drawn on a real (!) napkin, you can zoom in.
        </p>
      </div>
    </Layout>
  )
}
