import Head from 'next/head'

const Meta = ({title, descriptions}) => {
    return <Head>
        <title>{title}</title>
        <meta name="description" content={descriptions}/>
        <link rel="icon" href="/favicon-todo.ico" />
    </Head>
}

export default Meta