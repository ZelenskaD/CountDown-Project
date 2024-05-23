$(document).ready(function() {
    // Function to display cupcakes on the page
    function displayCupcake(cupcake) {
        $('#list-cupcakes').append(`
            <li data-id="${cupcake.id}">
                <b>${cupcake.flavor}</b> (${cupcake.size}) - ${cupcake.rating}/10
                <br><img src="${cupcake.image}" alt="Image of ${cupcake.flavor} cupcake" style="width:100px;">
                <br>
                <button class="btn btn-danger btn-sm delete-cupcake">Delete</button>
                <button class="btn btn-info btn-sm update-cupcake">Update</button>
            </li>
        `);
    }

    // Get cupcakes from the API and display them on the page
    function getCupcakes() {
        axios.get('/api/cupcakes')
            .then(response => {
                const cupcakes = response.data.cupcakes;
                $('#list-cupcakes').empty();
                cupcakes.forEach(cupcake => {
                    displayCupcake(cupcake);
                });
            })
            .catch(error => {
                console.error("There was an error getting the cupcakes!", error);
            });
    }

    // Handle form submission to add a new cupcake
    $('#cupcake-form').on('submit', function(event) {
        event.preventDefault();
        const flavor = $('#flavor').val();
        const size = $('#size').val();
        const rating = $('#rating').val();
        const image = $('#image').val() || "https://tinyurl.com/demo-cupcake";

        const newCupcake = {
            flavor: flavor,
            size: size,
            rating: rating,
            image: image
        };

        axios.post('/api/cupcakes', newCupcake)
            .then(response => {
                const addedCupcake = response.data.cupcake;
                displayCupcake(addedCupcake);
                $('#cupcake-form').trigger("reset"); // Reset the form
            })
            .catch(error => {
                console.error("There was an error adding the cupcake!", error);
            });
    });

    // Handle delete cupcake
    $('#list-cupcakes').on('click', '.delete-cupcake', function() {
        const cupcakeId = $(this).parent().data('id');
        axios.delete(`/api/cupcakes/${cupcakeId}`)
            .then(response => {
                $(this).parent().remove();
            })
            .catch(error => {
                console.error("There was an error deleting the cupcake!", error);
            });
    });

    // Handle update cupcake (show a prompt for simplicity)
    $('#list-cupcakes').on('click', '.update-cupcake', function() {
        const cupcakeId = $(this).parent().data('id');
        const flavor = prompt("Enter new flavor:");
        const size = prompt("Enter new size:");
        const rating = prompt("Enter new rating:");
        const image = prompt("Enter new image URL:");

        const updatedCupcake = {
            flavor: flavor,
            size: size,
            rating: rating,
            image: image
        };

        axios.patch(`/api/cupcakes/${cupcakeId}`, updatedCupcake)
            .then(response => {
                getCupcakes(); // Refresh the list
            })
            .catch(error => {
                console.error("There was an error updating the cupcake!", error);
            });
    });

    // Initial load of cupcakes
    getCupcakes();
});
