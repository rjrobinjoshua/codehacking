<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        DB::table('users')->insert([


            'name' => 'Robin Joshua',
            'role_id' => 1,
            'email' => 'rjrobinjoshua@gmail.com',
            'password' => bcrypt('robin123'),
            'is_active' => 1,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),



        ]);

    }
}
