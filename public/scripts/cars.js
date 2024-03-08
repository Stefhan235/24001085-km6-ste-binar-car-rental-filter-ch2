import carsData from "../../data/cars.json" assert { type: "json" };

class Car {
    searchCars(date, capacity) {
        const searchedCars = carsData.filter(
            (car) =>
                (!date ||
                    new Date(car.availableAt).toISOString().slice(0, 10) ===
                        date) &&
                (!capacity || car.capacity >= capacity)
        );
        return searchedCars;
    }
}

export default new Car();
