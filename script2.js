class UserProfile {
    constructor(name, location, gameInterests) {
        this.name = name;
        this.location = location;
        this.gameInterests = gameInterests;
    }

    describe() {
        return `${this.name} plays ${this.gameInterests}`;
    }
}

class GamingBusiness {
    constructor(name, location, gamesOffered, eventsHosted) {
        this.name = name;
        this.location = location;
        this.gamesOffered = gamesOffered;
        this.eventsHosted = eventsHosted;
    }

    describe() {
        return `${this.name} offers ${this.eventsHosted}`;
    }
}

class Menu {
    constructor() {
        this.userProfiles = [];
        this.gamingBusinesses = [];
        this.selectedUser = null;
    }

    start() {
        let selection;
        do {
            selection = this.showMainMenuOptions();
            switch (selection) {
                case '1':
                    this.createUser();
                    break;
                case '2':
                    this.viewUser();
                    break;
                case '3':
                    this.viewLocalShops();
                    break;
                case '4':
                    this.deleteUser();
                    break;
                case '5':
                    this.showAllUsers();
                    break;
                case '6':
                    this.createGamingBusiness();
                    break;
                default:
                    alert('Invalid option, please try again.');
            }
        } while (selection !== '0');

        alert('Thank you for using Rule0! Happy Gaming');
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New User
        2) View User
        3) View Local Shops
        4) Delete User
        5) Show All Users
        6) Create Gaming Business
        `);
    }

    createUser() {
        let name = prompt('Please Provide Your Name');
        let location = prompt('Please Provide Your Location');
        let gameInterests = prompt('Please Provide Your Game Interests');
        this.userProfiles.push(new UserProfile(name, location, gameInterests));
    }

    createGamingBusiness() {
        let name = prompt('Please Enter the Name of Your Business');
        let location = prompt('Please Enter the Location of Your Business');
        let gamesOffered = prompt('Please Enter the Games Offered by Your Business (comma-separated)');
        let eventsHosted = prompt('Please Enter the Events Hosted by Your Business (comma-separated)');
        this.gamingBusinesses.push(new GamingBusiness(name, location, gamesOffered.split(','), eventsHosted.split(',')));
    }

    viewUser() {
        let index = prompt('Enter the index of the user you wish to view');
        if (index >= 0 && index < this.userProfiles.length) {
            this.selectedUser = this.userProfiles[index];
            alert(`User Name: ${this.selectedUser.name}`);
        } else {
            alert('Invalid index.');
        }
    }

    viewLocalShops() {
        console.log("Local Shops:");
        let index = parseInt(prompt('Enter the index of the business you wish to view'));
        if (!isNaN(index) && index >= 0 && index < this.gamingBusinesses.length) {
            const selectedBusiness = this.gamingBusinesses[index];
            let message = `Business Name: ${selectedBusiness.name}\n`;
            message += `Location: ${selectedBusiness.location}\n`;
            message += `Games Offered: ${selectedBusiness.gamesOffered.join(', ')}\n`;
            message += `Events Hosted: ${selectedBusiness.eventsHosted.join(', ')}`;
            alert(message);
        } else {
            alert('Invalid index.');
        }
    }

    showAllUsers() {
        console.log("All Users:");
        if (this.userProfiles.length > 0) {
            let message = ''
            this.userProfiles.forEach((user) => {
                message += `${user.name} plays ${user.gameInterests} in ${user.location}\n`
            });
            alert(message);
        } else {
            alert(`There are no users!`)
        };
    }

    deleteUser() {
        let index = parseInt(prompt('Enter the number of the user you want to remove'));
        if (!isNaN(index) && index >= 0 && index < this.userProfiles.length) {
            this.userProfiles.splice ([index])
        } else {
            alert('Invalid index.');
        }

    }

}

const menu = new Menu();
menu.start();