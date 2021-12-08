
type UserFormProps = {
    name?: string
    birthdate?: Date
    about?: string
    height?: number
    isHuman?: boolean
    drinkPreference?: string
}

const UserForm = ( { name, birthdate, about, height, isHuman, drinkPreference } : UserFormProps) => {

    const handleSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type='text' name='name' value={name} />
            <label>Birthdate:</label>
            <input type='date' name='birthdate' value={birthdate?.toString()} />
            <label>About</label>
            <textarea name='about' value={about} />
            <label>Height:</label>
            <input type='number' name='height' checked={isHuman ?? true} />
            <label>Human:</label>
            <input type='checkbox' name='is_human' value={height} />
            <label>Drink preference:</label>
            <select name='drink_preference' value={drinkPreference}>
                <option value='whiskey'>Whiskey</option>
                <option value='beer'>Beer</option>
                <option value='wine'>Wine</option>
                <option value='vodka'>Vodka</option>
            </select>
            <input type='submit' value='Submit' />
        </form>
    )
}

export default UserForm