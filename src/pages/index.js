import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making PICKLES!!! by following the Gatsby Tutorial.</p>
            <p> This build witll fail.</p>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage