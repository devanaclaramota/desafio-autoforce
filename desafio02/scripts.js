//Inserindo Select 
let ref = document.querySelector('fieldset.mt-0.mb-2');

let select =  document.createElement('div');

select.innerHTML = `
        <select name="select">
            <option value="suv" selected>SUV</option>
            <option value="seda">Sedã</option>
            <option value="hatch">Hatch</option>
            <option value="pickup">Pick-up</option>
          </select>`;
let pai = ref.parentNode

select.style.marginTop = '20px';

pai.insertBefore(select,ref);
// area
let area = document.createElement('div');
area.innerHTML = `<textarea name="" placeholder="Mensagem"
   rows="10" cols="30"></textarea>`;

    area.style.marginTop = '20px';

    pai.insertBefore(area, ref);

