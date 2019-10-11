import React from 'react';
import PropTypes from 'prop-types';

class ArticleReader extends React.Component {
  render() {
    const reader = this.props.reader;
    
    if (typeof reader == "string") {
        return <span>{reader}</span>;
    }
    
    const href = reader.url || reader.twitter;
    return <a href={href}>{reader.name}</a>;
  }
}
ArticleReader.propTypes = {
  reader: PropTypes.object.isRequired // or string
};
class ArticleReaders extends React.Component {
  render() {
    const items = [];
    const readers = this.props.readers;
    
    switch (readers.length) {
        case 0: return null;
        case 1:
            items.push(<ArticleReader reader={readers[0]} />);
            break;
        case 2:
            items.push(
                <ArticleReader reader={readers[0]} key="0" />,
                " and ", 
                <ArticleReader reader={readers[1]} key="1" />);
            break;
        default:
            const last = readers.pop();
            readers.forEach((r, i) => items.push(<ArticleReader reader={r} key={i} />, ", "));
            items.push(" and ", <ArticleReader reader={last} key={readers.length - 1} />);
    }
    return (<p><small>Thanks to {items} for reading a draft of this article.</small></p>);
  }
}
ArticleReaders.propTypes = {
  readers: PropTypes.array
};

export default ArticleReaders
