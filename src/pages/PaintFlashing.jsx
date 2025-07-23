import { useEffect, useMemo, useState } from 'react'

const PaintFlashing = () => {
    // const Arr =  [
    //         {
    //             value: "aaaa",
    //             id: '0'
    //         },
    //         {
    //             value: "bbbb",
    //             id: '1'
    //         },
    //         {
    //             value: "cccc",
    //             id: '2'
    //         },
    //         {
    //             value: "dddd",
    //             id: '3'
    //         },
    //         {
    //             value: "eeee",
    //             id: '4'
    //         },
    //     ]

    const Arr = useMemo(() => {
        return [
            {
                value: "aaaa",
                id: '0'
            },
            {
                value: "bbbb",
                id: '1'
            },
            {
                value: "cccc",
                id: '2'
            },
            {
                value: "dddd",
                id: '3'
            },
            {
                value: "eeee",
                id: '4'
            },
        ]
    }, []);

    const [title, setTitle] = useState('')
    const [searchStr, setSearchStr] = useState('')
    const [filteredArr, setFilteredArr] = useState(Arr)

    useEffect(() => {
        const newArr = Arr.filter(item => {
            return item.value.toLocaleLowerCase().includes(searchStr)
        })
        setFilteredArr(newArr)
    }, [searchStr])

    const onSearchChange = (event) => {
        const str = event.target.value.toLocaleLowerCase()
        setSearchStr(str)
    }

    const onTitleChange = (event) => {
        const str = event.target.value.toLocaleLowerCase()
        setTitle(str)
    }

    return (
        <div>
            <h1>{title}</h1>
            {/* <h1 style={{ height: 150 }}>{title}</h1> */}

            <input
                onChange={onSearchChange}
                placeholder='search'
                id='search box'
            />
            <div style={{ height: 60 }} />
            <input
                onChange={onTitleChange}
                placeholder='set title'
                id='title box'
            />
            {
                filteredArr.map(item => {
                    return (
                        <div key={item.id}>
                            <h1>{item.value}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PaintFlashing





// more tools => rendering => paint flashing
// the DOM needs to reflow whenever a component gets added onto the side
