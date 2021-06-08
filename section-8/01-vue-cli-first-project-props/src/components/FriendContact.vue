<template>
	<section>
		<li>
			<h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
			<button @click="toggleFavorite">Toggle favorite</button>
			<button @click="toggleDetails">
				{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
			</button>
			<ul v-if="detailsAreVisible">
				<li><strong>Phone:</strong> {{ phoneNumber }}</li>
				<li><strong>Email:</strong> {{ emailAddress }}</li>
			</ul>
			<button @click="$emit('delete', id)">Delete</button>
		</li>
	</section>
</template>

<script>
export default {
	// props: [
	//   'name',
	//   'phoneNumber',
	//   'emailAddress',
	//   'isFavorite'
	// ],
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: true,
		},
		isFavorite: {
			type: Boolean,
			required: false,
			default: false,
			//  validator: function(value) {
			//    return value === '1' ||  value === '0';
			//   //  we make sure that the values are only 0 or 1: if not, a warning will appear
			//  }
		},
	},
	emits: ['toggle-favorite', 'delete'],
	// emits: {
	// 	'toggle-favorite': function(id) {
	// 			// expects an id parameter
	// 		if (id) {
	// 			return true;
	// 		} else {
	// 			console.warn('id is missing');
	// 			return false;
	// 		}
	// 	},
	// },
	data() {
		return {
			detailsAreVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			// this.friendIsFavorite = !this.friendIsFavorite;
			this.$emit('toggle-favorite', this.id);
		}
	},
};
</script>
