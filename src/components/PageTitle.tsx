import "../styles/page-title.scss"

export default function PageTitle( props ) {

    return (
        <h1 id='page-title' className='one'>{props.title}</h1>
    );
}