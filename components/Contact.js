var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem row'}>
        <div className={'sidebar'}></div>
        <div className={'col-4 image'}>
          <a className={'contactImage'}>
            <i className={'far fa-address-book fa-5x'}/> 
          </a>
        </div>
        <div className={'col-8 contactData'}>
          <p className={'contactLabel'}> Imię: {this.props.item.firstName}</p>
          <p className={'contactLabel'}> Nazwisko: {this.props.item.lastName}</p>
          <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
          </a>  
        </div>
      </div>
    )
  },
});