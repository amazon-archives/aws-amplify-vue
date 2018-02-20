const NotesTheme = {
  container: {
    background: '#fff',
    margin: '130px 20px 40px 20px',
    position: 'relative',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
    fontWeight: '200'
  },
  header: {
    position: 'absolute',
    top: '-1.2em',
    width: '100%',
    margin: '0',
    padding: '0',
    fontSize: '100px',
    fontWeight: '100',
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.15)',
    zIndex: '-1'
  },

  input: {
    padding: '16px 16px 16px 60px',
    border: 'none',
    background: 'rgba(0, 0, 0, 0.003)',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
    position: 'relative',
    margin: '0',
    width: '100%',
    fontSize: '2em',
    fontWeight: '200',
    lineHeight: '1.4em',
    outline: 'none',
    boxSizing: 'border-box'
  },

  list: {
    margin: '0',
    padding: '0',
    listStyle: 'none'
  },

  item: {
    display: 'flex',
    position: 'relative',
    fontSize: '1.5em',
    borderBottom: '1px solid #ededed',
    padding: '0.2em 0',
    textAlign: 'left',

    toggle: {
      marginRight: '1em',
      marginLeft: '0.5em',
      border: '1px solid #ededed',
      borderRadius: '50%',
      height: '1em',
      width: '1em',
      marginTop: '4px',
      marginBottom: '0px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      textAlign: 'left',
      flexGrow: '1'
    },
    remove: {
      margin: '0 0.5em',
      justifySelf: 'flex-end',
      opacity: '0'
    },

    done: {
      title: {
        textDecoration: 'line-through',
        opacity: '0.5'
      },
      remove: {
        opacity: '0.5'
      }
    }
  },

  footer: {
    color: '#777',
    padding: '10px 15px',
    height: '20px',
    textAlign: 'center',
    borderTop: '1px solid #e6e6e6',

    filter: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '0.8em',
      item: {
        margin: '0 1em'
      },
      mainItem: {
        margin: '0 1em',
        textDecoration: 'underline'
      }
    }
  }
}

export default NotesTheme
