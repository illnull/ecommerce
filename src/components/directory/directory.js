import React from 'react'

import './directory.scss'
import MenuItem from '../menu-item/menu-item'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [{
                title: 'hats',
                imageURL: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
                id: 1
            },
            {
                title: 'jacket',
                imageURL: 'https://images.unsplash.com/photo-1530041587872-d823b3d4bed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                id: 2
            },
            {
                title: 'shoes',
                imageURL: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
                id: 3
            },
            {
                title: 'men',
                imageURL: 'https://images.unsplash.com/photo-1569532256205-09c2cee37504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                size: 'large',
                id: 4
            },
            {
                title: 'women',
                imageURL: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=651&q=80',
                size: 'large',
                id: 5
            }]
        }
    }

    render() {
        return (
            <div className='menu'>
                {this.state.sections.map(({ title, imageURL, id, size }) => (
                    <MenuItem key={id} title={title} imageURL={imageURL} size={size} />
                ))}
            </div>
        )
    }
}

export default Directory