// Global state manager for camo tracking
const StateManager = {
    state: null,
    
    // Initialize the state from localStorage
    init() {
        const savedState = localStorage.getItem('globalCamoState');
        this.state = savedState ? JSON.parse(savedState) : {
            categories: {},
            lastUpdated: new Date().toISOString()
        };
        return this;
    },

    // Save state to localStorage
    saveState() {
        this.state.lastUpdated = new Date().toISOString();
        localStorage.setItem('globalCamoState', JSON.stringify(this.state));
        return this;
    },

    // Get state for a specific category and weapon
    getWeaponState(category, weaponId) {
        if (!this.state.categories[category]) {
            this.state.categories[category] = {};
        }
        if (!this.state.categories[category][weaponId]) {
            this.state.categories[category][weaponId] = {
                completedCamos: [],
                isCollapsed: false
            };
        }
        return this.state.categories[category][weaponId];
    },

    // Update weapon state
    updateWeaponState(category, weaponId, camoName, isCompleted) {
        const weaponState = this.getWeaponState(category, weaponId);
        
        if (isCompleted && !weaponState.completedCamos.includes(camoName)) {
            weaponState.completedCamos.push(camoName);
        } else if (!isCompleted) {
            weaponState.completedCamos = weaponState.completedCamos.filter(camo => camo !== camoName);
        }
        
        this.saveState();
        return this;
    },

    // Update collapse state
    updateCollapseState(category, weaponId, isCollapsed) {
        const weaponState = this.getWeaponState(category, weaponId);
        weaponState.isCollapsed = isCollapsed;
        this.saveState();
        return this;
    },

    // Get all completed camos for a category
    getCategoryProgress(category) {
        if (!this.state.categories[category]) return {};
        return this.state.categories[category];
    },

    // Get global progress
    getGlobalProgress() {
        let totalCamos = 0;
        let completedCamos = 0;
        
        Object.keys(this.state.categories).forEach(category => {
            Object.keys(this.state.categories[category]).forEach(weaponId => {
                const weapon = this.state.categories[category][weaponId];
                completedCamos += weapon.completedCamos.length;
            });
        });
        
        return {
            completed: completedCamos,
            total: 1005, // Total number of camos available
            percentage: ((completedCamos / 1005) * 100).toFixed(1)
        };
    }
};