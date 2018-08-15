import React, { Component } from 'react';
import stripHtml from 'string-strip-html';

class RandoQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {quote: ''};
  }

    async componentDidMount() {
      await fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then(async results => {
        return await results.json();
      }).then(async data => {
        var author = data[0].title;
        var quote = stripHtml(data[0].content);
        let output = (
          <div className="thick-border"><h2 className="align-center">{quote}</h2><br /><h4 className="align-right">-{author}</h4></div>
        )
        await this.setState({quote: output});
      });
    }

    render() {
        return (
          <div>
            {this.state.quote}
          </div>
        );
    }
}

export default RandoQuote;
