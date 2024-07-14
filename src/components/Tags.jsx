import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
    tag:{
        backgroundColor: '#d1c1e0',
        color: '#663399',
        padding: '4px 6px',
        fontWeight:500,
        marginRight:8,
        marginBottom:12,
        borderRadius: 4,
        display: 'inline-block'
    }
})


const Tags = ({tagText}) => {
    return <div {...stylex.props(styles.tag)}>{tagText}</div>
}

export default Tags;