
type UserFormProps = {
    name?: string
    birthdate?: Date
    height?: number
    drinkPreference?: string
}

const UserForm = ( { name, birthdate, height, drinkPreference } : UserFormProps) => {

    const handleSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' name='name' value={name} />
                <input type='datetime-local' name='birthdate' value={birthdate?.toString()} />
                <input type='number' name='height' value={height} />
                <select name='drink_preference' value={drinkPreference} />
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
}

export default UserForm