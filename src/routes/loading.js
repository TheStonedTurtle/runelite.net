import { h } from 'preact'
import Layout from '../components/layout'
import hero from '../_data/hero'
import Meta from '../components/meta'
import './loading.scss'

const Loading = () => (
  <Layout>
    <Meta title={`Loading - ${hero.title}`} />

    <section id="loading">
      <div class="content-section">
        <h1>Loading...</h1>
        <hr />
        <p>Please wait while you are redirected.</p>
      </div>
    </section>
  </Layout>
)

export default Loading
