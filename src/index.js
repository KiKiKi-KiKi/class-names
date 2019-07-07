'use strict';

function createClassNamelist(args = []) {
  if( !args.length || !Array.isArray(args) ) {
    return [];
  }

  const classes = args.reduce((arr, data) => {
    const dataType = typeof data;

    if ( (!data && data !== 0)
      || dataType === 'function' ) {
      return arr;
    }

    if ( dataType === 'string'
      || dataType === 'number' ) {
      return arr.concat( (data += '').split(' ') );
    } else
    if( Array.isArray(data) ) {
      const inner = createClassNamelist(data);
      return arr.concat(inner);
    } else
    if( dataType === 'object' ) {
      return arr.concat( Object.keys(data).filter((key) => data[key]) );
    }

    return arr;
  }, []);

  return classes;
}

function classnames(...args) {
  if ( !args.length ) {
    return '';
  }

  const classNames = createClassNamelist(args);
  return [...new Set(classNames)].join(' ').trim();
}

export default classnames;
