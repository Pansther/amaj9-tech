import React from 'react';

class CategoryList extends React.Component {

  render () {
    const newAlt = this.props.name + '-img';
    //const productLink = 'category' + this.props.href;
    const productLink = this.props.href;
    return (
      <a href={productLink}>
        <div className='list-item'>

          <div className='img-box'>
            <img className='img-item' src={this.props.img} alt={newAlt}/>
          </div>

          <div className='text-box'>
            <span className='text-item'>{this.props.name}</span>
          </div>

        </div>
      </a>
    );
  }

}

export default CategoryList;
