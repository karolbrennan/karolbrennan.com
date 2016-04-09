VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "private_network", ip: "192.168.50.111"
    config.vm.provision :ansible do |ansible|
        ansible.playbook = "ansible/playbook.yml"
        ansible.extra_vars = {
            server_name: "test.dev",
            APPLICATION_ENV: "development"
        }
    end
end