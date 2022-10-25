import checkNumInputs from './checkNumInputs';


const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
            documentWidth = document.querySelectorAll('#width'),
            documentHeight = document.querySelectorAll('#height'),
            documentType = document.querySelectorAll('#view_type'),
            documentProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems (event, elem, prop){
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName){
                    case 'SPAN': 
                        state[prop] = i;
                        break;
                    case 'INPUT': 
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = i === 0 ? 'Холодное' : 'Теплое';
                            elem.forEach((box, j) =>{
                                box.checked = false;
                                if (i==j) {
                                    box.checked = true;
                                }
                            });
                        }
                        else{
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                
                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form'); 
    bindActionToElems('input', documentWidth, 'width'); 
    bindActionToElems('input', documentHeight, 'height'); 
    bindActionToElems('change', documentType, 'type'); 
    bindActionToElems('change', documentProfile, 'profile'); 
};

export default changeModalState;