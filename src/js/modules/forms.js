import checkNumInputs from './checkNumInputs';


const forms = (state) => {
    const form  = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');


    checkNumInputs('input[name="user_phone"]');

    const messege = {
        loading: 'loading...',
        success: 'Success!',
        failure: 'Fail!'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = messege.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.vaue = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) =>{
            e.preventDefault();

            let statusMessege = document.createElement('div');
            statusMessege.classList.add('status');
            item.appendChild(statusMessege);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc' === "end")){
                for (let key in state){
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessege.textContent = messege.success;
                })
                .catch(() => {
                    statusMessege.textContent = messege.failure;
                })
                .finally(() =>{
                    clearInputs();
                    setTimeout(() => {
                        statusMessege.remove()
                    }, 5000);
                });
        });
    });

};

export default forms;