import { Client } from '../../prismic-configuration'


const Article = () => {
    return(
        <div>
            article
        </div>
    )
}

export default Article

export async function getServerSideProps(context) {
    const article = await Client().getByUID("article", context.query.article);

    return {
        props:
        article
    }
}