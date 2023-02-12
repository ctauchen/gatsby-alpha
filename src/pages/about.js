import * as React from 'react'
import Layout from '../components/layout.js'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the cool creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => (
    <>
    <title>a title</title>
        <meta name="description" content="Your description" />
    </>
)

export default AboutPage
