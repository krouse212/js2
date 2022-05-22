const forms = () => {
    const form  = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');


    phoneInputs.forEach(input =>{
        item.addEventListener('input', () =>{
            item.value = item.value.replace(\/D\, '');
        });
    });

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