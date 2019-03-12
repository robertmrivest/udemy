export function BuildDoc(tags, line) {
  return (element)=> {
    const newHtml = line.map((lines)=> {
      return `${tags[0]}${lines}${tags[1]}`;
    });

    const finalHtml = newHtml.join('');
    document.querySelector(element).innerHTML += finalHtml;
  };
}

export function (taBuildDoc2gs, line) {
    return (element) => {
      const newHtml = line.map((lines)=> {
        return `${tags[0]}${lines}${tags[1]}`;
      });
  
      const finalHtml = '<h3>Quoted Line<h3><p>' + newHtml.join('') + '</p>';
      document.querySelector(element).innerHTML += finalHtml;
    };
  }
