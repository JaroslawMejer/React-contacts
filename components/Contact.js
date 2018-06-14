var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem row'},
        React.createElement('div', {className: 'sidebar'}),
        React.createElement('div', {className: 'col-4 image'},
          React.createElement('a', {className: 'contactImage'},
            React.createElement('i', {className: 'far fa-address-book fa-5x'}) 
          ),
        ),
        React.createElement('div', {className: 'col-8 contactData'},
          React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
            this.props.item.email
          )
        )  
      )
    )
  },
});