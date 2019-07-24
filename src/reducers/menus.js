var initialState = [
    {
        label: 'Gimbal',
        to: '/gimbal',
        activeOnlyWhenExact: false,
        subCategory: [
            {
                label: 'Zhiyun',
                image: 'https://store.kingcom.com.vn/image/cache/catalog/junny/Cava5-440x440.jpg',
                to: '/zhiyun',
                activeOnlyWhenExact: false
            },
            {
                label: 'Feiyu',
                image: 'https://digitalking.com.vn/wp-content/uploads/2018/08/feiyu-g6-plus-7.jpg',
                to: '/feiyu',
                activeOnlyWhenExact: false
            }
        ]
    },
    {
        label: 'Camera',
        to: '/camera',
        activeOnlyWhenExact: false,
        subCategory: [
           
        ]
    },
    {
        label: 'Lens',
        to: '/lens',
        activeOnlyWhenExact: false,
        subCategory: [
           
        ]
    },
    {
        label: 'Tripod',
        to: '/tripod',
        activeOnlyWhenExact: false,
        subCategory: [
           
        ]
    },
    {
        label: 'Light',
        to: '/light',
        activeOnlyWhenExact: false,
        subCategory: [
           
        ]
    },
    {
        label: 'Monitor',
        to: '/monitor',
        activeOnlyWhenExact: false,
        subCategory: [
           
        ]
    },
    {
        label: 'Sound',
        to: '/sound',
        activeOnlyWhenExact: false,
        subCategory: [
           
        ]
    },
    {
        label: 'Stable',
        to: '/stable',
        activeOnlyWhenExact: false,
        subCategory: [
           
        ]
    },
    {
        label: 'Battery',
        to: '/battery',
        activeOnlyWhenExact: false,
        subCategory: [
           
        ]
    },
    {
        label: 'Tools',
        to: '/tools',
        activeOnlyWhenExact: false,
        subCategory: [
           
        ]
    }
];

const menus = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
};

export default menus;