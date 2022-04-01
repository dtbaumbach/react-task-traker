import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( {title, onAdd} ) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button text='Add' onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header