import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making PICKLES!!! by following the Gatsby Tutorial.</p>
            <p> This build witll fail.</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/image.webp"
            />
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage