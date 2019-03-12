let city = `Chicago`; //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `select *`;
let table = `company`;
let whereClauses = [`uid = ${2 + 1}`, `OR city = ${city}`];

function valSelect(strings, command, table, whereClause) {
  let errors = '';
  if (
    command.toUpperCase().search('SELECT') !== 0 &&
    command.toUpperCase().search('UPDATE') !== 0
  ) {
    errors += 'You Can only use Select or Update Statements\n';
  }

  if (table.toUpperCase() === 'PASSWORD') {
    errors += 'You cannot use the password Table\n';
  }

  const finalWhereClause = checkWhere(whereClause);

  const finalCommand = `${command} ${strings[1]} ${table} ${
    strings[2]
  } ${finalWhereClause.join(' ')}`;
  return errors ? errors : finalCommand;
}

function checkWhere(data) {
  let myCheck = false;
  data.forEach(item => {
    if (item.toUpperCase().search('ORDER BY') >= 0) {
      myCheck = true;
    }
  });
  if (!myCheck) {
    data.push('order by asc');
  }
  return data;
}

const myData = valSelect`${command} from ${table} where ${whereClauses}`;
document.querySelector('#root').innerHTML = `<h2>${myData}</h2>`;
console.log('The Output', myData);
