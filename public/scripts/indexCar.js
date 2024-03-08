import cars from "./cars.js";

const carCard = document.getElementById("car-card");
const searchButton = document.getElementById("search-button");
// const inputDriver = document.getElementById("driver");
const inputDate = document.getElementById("date");
// const inputTime = document.getElementById("time");
const inputCapacity = document.getElementById("capacity");

searchButton.addEventListener("submit", (event) => {
    // const driverValue = inputDriver.options[selectOption.selectedIndex].value;
    const dateValue = inputDate.value;
    // const timeValue = inputTime.value;
    const capacityValue = inputCapacity.value;
    console.log(dateValue);
    event.preventDefault();

    const searchedCars = cars.searchCars(dateValue, capacityValue);
    let result = "";
    searchedCars.map((car) => {
        result += `<div class="col-md-4 my-3">
                    <div class="card p-3">
                        <img
                            src="./images/inova.png"
                            class="card-img-top p-4"
                            alt="..."
                        />
                        <div class="card-body">
                            <h6 class="card-title">
                                ${car.manufacture} ${car.model}
                            </h6>
                            <h5>Rp. ${car.rentPerDay.toLocaleString(
                                "id-ID"
                            )} / hari</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>

                            <p>
                                <span>
                                    <img
                                        src="./images/icon_users.png"
                                        alt="users"
                                        class="pe-2"
                                    />
                                </span>
                                ${car.capacity} orang
                            </p>

                            <p>
                                <span>
                                    <img
                                        src="./images/icon_settings.png"
                                        alt="transmisi"
                                        class="pe-2"
                                    />
                                </span>
                                ${car.transmission}
                            </p>

                            <p>
                                <span>
                                    <img
                                        src="./images/icon_calendar.png"
                                        alt="tahun"
                                        class="pe-2"
                                    />
                                </span>
                                Tahun ${car.year}
                            </p>
                            <button
                                type="button"
                                class="btn"
                                style="
                                    background-color: #5cb85f;
                                    color: white;
                                    border-radius: 2px;
                                    width: 100%;
                                "
                            >
                                Pilih Mobil
                            </button>
                        </div>
                    </div>
                </div>`;
    });
    carCard.innerHTML = result;
});