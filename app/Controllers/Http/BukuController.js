'use strict'
const Buku = use('App/Models/Buku')

class BukuController {
    async store({request, response}) {

        const dataBuku = request.only(['nama', 'stok', 'rak'])
        const bukuBaru = new Buku
        bukuBaru.nama = dataBuku.nama
        bukuBaru.stok = dataBuku.stok
        bukuBaru.rak = dataBuku.rak
        await bukuBaru.save()

        return response.status(200).json({
            message: 'Data berhasil disimpan'
        })

    }

    async index({request, response}) {
        const buku = await Buku.all()
        return response.status(200).json(buku)
    }

    async show({request, response}) {
        const buku = await Buku.find(request.params.id)
        return response.status(200).json(buku)
    }

    async update({request, response}) {
        const dataBuku = request.only(['nama', 'stok', 'rak'])
        const buku = await Buku.find(request.params.id)
        buku.nama = dataBuku.nama
        buku.stok = dataBuku.stok
        buku.rak = dataBuku.rak
        buku.save()

        return response.status(200).json(buku)
    }

    async delete({request, response}) {

        const buku = await Buku.find(request.params.id)
        await buku.delete()

        return response.status(200).json({message: 'Berhasil dihapus'})

    }
}

module.exports = BukuController
