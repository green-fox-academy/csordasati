from operations import *

def main():
    database = read_db('database/database.txt')
    pretty_print(database)

    while True:
        show_menu()
        user_input = int(input('Choose one: '))
        try:
            if user_input == 1:
                add_task(database)
            elif user_input == 2:
                complete_task(database)
            elif user_input == 3:
                remove_task(database)
            elif user_input == 0:
                break
        except TypeError:
            print('You entered a wrong value')

    save_to_db(database, 'database/database.txt')
    print('Saved')

main()